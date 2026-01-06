// Code 1.4 - React Query (SSOT 위임: QueryCache + Mutation + Invalidate)
//
// 핵심:
// - items를 useState로 "복제"하지 않는다. (로컬 미러 소유권을 Page가 가지지 않음)
// - 목록은 useQuery가 관리한다. (QueryCache가 SSOT 역할)
// - create/update/delete는 useMutation으로 분리한다.
// - 성공하면 invalidateQueries로 list를 refetch해서 정합을 맞춘다.

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const api = {
  async list() {
    const res = await fetch("/api/items");
    return res.json(); // [{ id, value }]
  },
  async create() {
    const res = await fetch("/api/items", { method: "POST" });
    return res.json(); // { id, value }
  },
  async update(id) {
    const res = await fetch(`/api/items/${id}`, { method: "PATCH" });
    return res.json(); // { id, value }
  },
  async remove(id) {
    await fetch(`/api/items/${id}`, { method: "DELETE" });
  },
};

const ITEMS_KEY = ["items"];

export default function App() {
  const qc = useQueryClient();

  // ✅ 서버 상태(items)는 QueryCache가 관리
  const { data: items = [], isFetching } = useQuery({
    queryKey: ITEMS_KEY,
    queryFn: api.list,
  });

  // ✅ 서버 변경은 Mutation으로 분리 + 성공 시 invalidate로 정합
  const createM = useMutation({
    mutationFn: api.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: ITEMS_KEY }),
  });

  const updateM = useMutation({
    mutationFn: api.update,
    onSuccess: () => qc.invalidateQueries({ queryKey: ITEMS_KEY }),
  });

  const deleteM = useMutation({
    mutationFn: api.remove,
    onSuccess: () => qc.invalidateQueries({ queryKey: ITEMS_KEY }),
  });

  const isMutating =
    createM.isPending || updateM.isPending || deleteM.isPending;

  return (
    <>
      <button onClick={() => createM.mutate()} disabled={isMutating}>
        Create
      </button>

      {isFetching && <p>loading...</p>}

      <ul>
        {items.map((post) => (
          <li key={post.id}>
            {post.value}
            <button
              onClick={() => updateM.mutate(post.id)}
              disabled={isMutating}
            >
              +1
            </button>
            <button
              onClick={() => deleteM.mutate(post.id)}
              disabled={isMutating}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

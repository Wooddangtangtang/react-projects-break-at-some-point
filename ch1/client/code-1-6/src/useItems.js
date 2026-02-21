import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

export default function useItems() {
  const queryClient = useQueryClient();

  const itemsQuery = useQuery({
    queryKey: ["items"],
    queryFn: api.list,
  });

  const createItem = useMutation({
    mutationFn: () => api.create(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });
  const updateItem = useMutation({
    mutationFn: (id) => api.update(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });
  const deleteItem = useMutation({
    mutationFn: (id) => api.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });

  return {
    items: itemsQuery.data ?? [],
    isLoading: itemsQuery.isLoading,
    createItem,
    updateItem,
    deleteItem,
  };
}

import { useEffect, useState } from "react";

const api = {
  async list() {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/api/items`);
    return res.json(); // [{ id, value }]
  },
  async create() {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/api/items`, {
      method: "POST",
    });
    return res.json(); // { id, value }
  },
  async update(id) {
    const res = await fetch(
      `${import.meta.env.VITE_API_HOST}/api/items/${id}`,
      {
        method: "PATCH",
      }
    );
    return res.json(); // { id, value }
  },
  async remove(id) {
    await fetch(`${import.meta.env.VITE_API_HOST}/api/items/${id}`, {
      method: "DELETE",
    });
  },
};

export default function App() {
  const [items, setItems] = useState([]); // ❗ 서버 스냅샷을 담아두는 로컬 미러

  const fetchItems = async () => {
    const data = await api.list();
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async () => {
    await api.create();
    await fetchItems();
  };
  const handleUpdate = async (id) => {
    await api.update(id);
    await fetchItems();
  };
  const handleDelete = async (id) => {
    await api.remove(id);
    await fetchItems();
  };

  return (
    <>
      <button onClick={handleCreate}>Create</button>
      <ul>
        {items.map((post) => (
          <li key={post.id}>
            {post.value}
            <button onClick={() => handleUpdate(post.id)}>+1</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

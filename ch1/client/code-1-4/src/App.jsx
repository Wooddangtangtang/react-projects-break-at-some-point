import { useEffect, useState } from "react";

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

export default function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await api.list();
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
    const intervalId = setInterval(fetchItems, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleCreate = async () => {
    await api.create();
  };
  const handleUpdate = async (id) => {
    await api.update(id);
  };
  const handleDelete = async (id) => {
    await api.remove(id);
  };

  return (
    <>
      <button onClick={handleCreate}>Create</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleUpdate(item.id)}>+1</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

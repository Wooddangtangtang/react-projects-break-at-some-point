import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), value: 1 },
    { id: crypto.randomUUID(), value: 2 },
    { id: crypto.randomUUID(), value: 3 },
  ]);

  const handleCreate = () => {
    const created = { id: crypto.randomUUID(), value: 0 };
    setItems((prev) => [created, ...prev]);
  };
  const handleUpdate = (id) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, value: p.value + 1 } : p))
    );
  };
  const handleDelete = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
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

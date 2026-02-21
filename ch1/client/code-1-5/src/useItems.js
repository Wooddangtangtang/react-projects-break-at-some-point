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

export default function useItems() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await api.list();
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const createItem = async () => {
    await api.create();
    await fetchItems();
  };
  const updateItem = async (id) => {
    await api.update(id);
    await fetchItems();
  };
  const deleteItem = async (id) => {
    await api.remove(id);
    await fetchItems();
  };

  return { items, createItem, updateItem, deleteItem };
}

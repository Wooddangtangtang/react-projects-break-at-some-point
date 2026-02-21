import useItems from "./useItems";

export default function App() {
  const { items, createItem, updateItem, deleteItem } = useItems();

  return (
    <>
      <button onClick={createItem}>Create</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => updateItem(item.id)}>+1</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

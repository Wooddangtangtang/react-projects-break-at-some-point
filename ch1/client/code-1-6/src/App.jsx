import useItems from "./useItems";

export default function App() {
  const { items, isLoading, createItem, updateItem, deleteItem } = useItems();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <button onClick={() => createItem.mutate()}>Create</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => updateItem.mutate(item.id)}>+1</button>
            <button onClick={() => deleteItem.mutate(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

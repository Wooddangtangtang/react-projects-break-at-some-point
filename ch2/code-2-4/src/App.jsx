import useNameForm from "./useNameForm";

export default function App() {
  const { name, setName, isValid, error } = useNameForm();

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {!isValid && <p>{error}</p>}
    </form>
  );
}

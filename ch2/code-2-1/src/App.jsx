import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setIsValid(false);
      setError("이름은 2글자 이상이어야 합니다.");
    } else {
      setIsValid(true);
      setError("");
    }
  }, [name]);

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {!isValid && <p>{error}</p>}
    </form>
  );
}

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const isValid = name.length >= 2;
  const error = isValid ? "" : "이름은 2글자 이상이어야 합니다.";

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {!isValid && <p>{error}</p>}
    </form>
  );
}

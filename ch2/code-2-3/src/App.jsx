import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const trimmed = name.trim();
  const isEmpty = trimmed.length === 0;
  const isTooShort = trimmed.length < 2;
  const hasForbiddenWord = trimmed.includes("admin");

  const error = (() => {
    if (isEmpty) return "이름을 입력해주세요.";
    if (isTooShort) return "이름은 2글자 이상이어야 합니다.";
    if (hasForbiddenWord) return "사용할 수 없는 이름입니다.";
    return "";
  })();

  const isValid = error === "";

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {!isValid && <p>{error}</p>}
    </form>
  );
}

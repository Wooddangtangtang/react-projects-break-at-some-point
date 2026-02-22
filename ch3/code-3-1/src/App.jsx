import { useEffect } from "react";

export default function App() {
  const handleLogout = () => {
    console.log("로그아웃");
  };

  useEffect(() => {
    console.log("useEffect: 렌더링 이후 실행");
  });

  return (
    <>
      <div>OnClick</div>
      <button onClick={handleLogout()}>렌더링 시점-함수호출</button>
      <br />
      <button onClick={handleLogout}>이벤트 시점-함수참조</button>
    </>
  );
}
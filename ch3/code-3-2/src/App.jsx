export default function App() {
  const handleLogout = () => {
    console.log("로그아웃");
  };

  // 렌더링 시점의 콘솔 확인용
  console.log("컴포넌트 렌더링");

  return (
    <>
      <div>OnClick</div>
      <button onClick={handleLogout()}>렌더링 시점-함수호출</button>
      <br />
      <button onClick={handleLogout}>이벤트 시점-함수참조</button>
      <br />
      {/* 감싼 함수는 클릭 시점에 발생하므로 함수 참조이다. 즉, 이벤트 시점에 발생한다.*/}
      <button onClick={() => handleLogout()}>감싼 함수-함수참조</button>
    </>
  );
}

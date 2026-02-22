export default function App() {
  const handleLogout = () => {
    console.log("클릭");
  };

  return (
    <>
      <button onClick={handleLogout}>1번: 함수참조-추가 래핑 없음</button>
      <br />
      {/* 감싼 함수는 클릭 시점에 발생하므로 함수 참조이다. 즉, 이벤트 시점에 발생한다.*/}
      <button onClick={() => handleLogout()}>
        2번: 화살표함수-추가 함수 생성
      </button>
    </>
  );
}

export default function App() {
  // 인자가 필요한 경우
  const handleDelete = (id) => {
    console.log(`삭제할 ID: ${id}`);
  };

  // 여러 동작을 조합하는 경우
  const handleSave = () => console.log("저장");
  const handleClose = () => console.log("닫기");
  const handleSaveAndClose = () => {
    handleSave();
    handleClose();
  };

  return (
    <>
      {/* 1번 버튼 - 렌더링 시 즉시 실행됨(잘못된 사용) */}
      <button onClick={handleDelete(123)}>삭제</button>

      {/* 2번 버튼 - 클릭 시 인자와 함께 실행(올바른 사용) */}
      <button onClick={() => handleDelete(123)}>삭제</button>

      {/* 3번 버튼 - 인자가 필요 없는 경우, 함수 참조만 전달 */}
      <button onClick={handleSaveAndClose}>저장 후 닫기</button>
    </>
  );
}

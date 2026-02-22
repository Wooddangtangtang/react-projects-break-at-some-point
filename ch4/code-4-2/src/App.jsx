export default function App() {
  return (
    <div className="container max-w-4xl mx-auto px-4">
      <article>
        <header>
          <h1>리액트에서 시맨틱 태그 사용하기</h1>
          <time dateTime="2026-02-14">2026년 2월 14일</time>
        </header>

        <div className="prose">
          <section>
            <h2>시맨틱 태그란?</h2>
            <p>시맨틱 태그는 문서에 의미를 부여하는...</p>
          </section>

          <section>
            <h2>왜 필요한가?</h2>
            <p>스크린 리더 사용자와 검색엔진은...</p>
          </section>
        </div>

        <footer>
          <div className="flex gap-2">
            <button>좋아요</button>
            <button>공유</button>
          </div>
        </footer>
      </article>
    </div>
  );
}

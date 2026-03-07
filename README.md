# [전자책] 어느 순간 무너지는 리액트 프로젝트

<p align="center">
  <img src="./assets/book-cover.jpg" width="320"/>
</p>

📖 **책 보기**

- [리디북스 (전자책)](https://ridibooks.com/books/2773000110)

- [노션 (온라인 버전 / PDF 다운로드 가능)](https://www.notion.so/307df84d989e8053a04cf1bb1ab093c4)

---

이 레포지토리는 전자책 **「어느 순간 무너지는 리액트 프로젝트」** 에 수록된 예제 코드를 정리한 공식 저장소입니다.

책 본문에서는 코드 캡션을 `코드 1_1`과 같이 한글 형식으로 표기합니다. 다만 GitHub 예제 레포지토리 및 파일명에서는 `Code 1_1` 형식을 사용하므로, 두 표기 방식의 차이를 참고하기 바랍니다.

---

## 실행 환경

- Node.js v20+ (LTS 권장)

---

## 실행 방법

먼저 저장소를 클론합니다.

```bash
git clone https://github.com/Wooddangtangtang/react-projects-break-at-some-point.git
cd react-projects-break-at-some-point
```

실습하고 싶은 `code-x-x` 형식의 예제 폴더로 이동합니다.

```bash
cd ch1/client/code-1-1
```

해당 폴더의 README를 참고하여 실행합니다.

```bash
npm install
npm run dev
```

각 예제는 실행 방식이 다를 수 있으므로 반드시 해당 폴더의 README를 확인하세요.

> ※ Chapter 1의 일부 예제(code-1-2 ~ code-1-6)는 `ch1/server`를 함께 실행해야 합니다.  
> 해당 예제의 README에서 서버 실행 방법을 확인하세요.

---

## 저장소 구조

예제 코드는 책의 장 구조와 동일하게 구성되어 있습니다.

```text
ch1/
 ├ client/
 │   ├ code-1-1/
 │   ├ code-1-2/
 │   └ ...
 └ server/
     └ index.js
ch2/
 ├ code-2-1/
 ├ code-2-2/
 └ ...
ch3/
 ├ code-3-1/
 └ ...
ch4/
 ├ code-4-1/
 └ ...
```

각 `code-x-x` 폴더는 독립적으로 실행 가능한 예제 프로젝트입니다.

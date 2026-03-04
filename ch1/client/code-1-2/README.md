# Code 1_2

이 레포는 **「어느 순간 무너지는 리액트 프로젝트」** Chapter 1에 수록된 `코드 1_2` 예제입니다.

이 예제는 **서버 API를 연결하여 서버 상태를 컴포넌트 상태로 복제해 사용하는 구조**를 보여줍니다. 화면에 표시되는 `items`는 서버 응답을 기준으로 갱신되지만, 서버 상태의 정합을 유지하는 책임은 여전히 **컴포넌트가 직접 부담**합니다.

이 구조는 단일 사용자/단일 탭 환경에서는 문제없이 동작하는 것처럼 보이지만, 이후 절에서 다루는 **동시 사용자, stale snapshot, 요청 실패 상황**에서 정합 문제가 드러나는 출발점이 됩니다.

## 실행 방법 (터미널 2개)

### 1. 서버 실행 (ch1/server)

```bash
cd ch1/server
npm install
npm run dev
```

> 브라우저에서 `http://localhost:3000` 접속 시 OK가 표시되면 정상입니다.

### 2. 클라이언트 실행 (ch1/client/code-1-2)

다른 터미널에서 아래를 실행합니다.

```bash
cd ch1/client/code-1-2
npm install
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```
http://localhost:5173
```

> `Create` 버튼 클릭 후 개발자 도구 Network 탭에서 `POST /api/items` 요청이 201 상태로 표시되면 정상입니다.

## API 연결 방식

이 예제는 클라이언트에서 `/api/*`로 요청을 보냅니다. (예: `/api/items`)

로컬 개발 환경에서는 Vite dev server가 `/api` 요청을 API 서버(`http://localhost:3000`)로 프록시합니다.
따라서 클라이언트 코드는 `/api/*` 경로를 그대로 사용해도 정상 동작합니다.

> **참고 (프로젝트 배포)**  
> Vercel에 배포할 경우에는 `vercel.json`의 `rewrites`를 사용해 `/api` 요청을 배포된 API 서버로 전달할 수 있습니다.  
> (이 예제 README에서는 배포 설정을 다루지 않습니다.)

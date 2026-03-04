# Code 1_4

이 레포는 **「어느 순간 무너지는 리액트 프로젝트」** Chapter 1에 수록된 `코드 1_4` 예제입니다.

이 예제는 **일정 간격으로 서버 데이터를 재조회(polling)하여 로컬 미러를 주기적으로 갱신하는 방식**을 보여줍니다.  
동기화 기준을 “사용자 액션”이 아니라 “시간 간격”에 두어, **stale이 지속되는 시간을 제한**하는 전략을 확인할 수 있습니다.

## 실행 방법 (터미널 2개)

### 1. 서버 실행 (ch1/server)

```bash
cd ch1/server
npm install
npm run dev
```

> 브라우저에서 `http://localhost:3000` 접속 시 OK가 표시되면 정상입니다.

### 2. 클라이언트 실행 (ch1/client/code-1-4)

다른 터미널에서 아래를 실행합니다.

```bash
cd ch1/client/code-1-4
npm install
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```
http://localhost:5173
```

> 일정 시간이 지나면 개발자 도구 Network 탭에서 `GET /api/items` 요청이 주기적으로 발생하면 정상입니다.

## API 연결 방식

이 예제는 클라이언트에서 `/api/*`로 요청을 보냅니다. (예: `/api/items`)

로컬 개발 환경에서는 Vite dev server가 `/api` 요청을 API 서버(`http://localhost:3000`)로 프록시합니다.
따라서 클라이언트 코드는 `/api/*` 경로를 그대로 사용해도 정상 동작합니다.

> **참고 (프로젝트 배포)**  
> Vercel에 배포할 경우에는 `vercel.json`의 `rewrites`를 사용해 `/api` 요청을 배포된 API 서버로 전달할 수 있습니다.  
> (이 예제 README에서는 배포 설정을 다루지 않습니다.)

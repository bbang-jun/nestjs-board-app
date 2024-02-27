# nestjs-board-app
[인프런-따라하며 배우는 NestJS] 게시판 애플리케이션

- Node.js 버전: v20.11.0
- nest 버전: 10.3.2

- yarn으로 Nest.JS 설치
```bash
yarn global add @nestjs/cli
```

- Nest.JS 프로젝트 생성
```bash
nest new ./
```

- Nest.JS 프로젝트 실행
```bash
yarn run start:dev
```

- 파이프 모듈 설치
```bash
yarn add class-validator class-transformer --save
```

- src/main.ts: 앱을 생성하고 실행하는 시작점이 되는 파일(entry point)
- src/app.module.ts: 앱 모듈을 정의
- .eslintrc.js: 문법 오류 검출 목적 파일
- .prettierrc: 코드 포맷터 역할의 파일(어떤 따옴표 사용할지, Indent 값으로 몇을 줄지 등)
- nest-cli.jon: nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
- tsconfig.json: 어떻게 타입스크립트를 컴파일 할지 설정
- tsconfig.build.json: build할 때 필요한 설정들 명시 및 빌드 시 필요 없는 파일들을 excludes에 명시
- package.json
  - build: 운영환경을 위한 빌드
  - format: 린트에러가 났을지 수정
  - start: 앱 시작
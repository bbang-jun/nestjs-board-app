import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts: 앱을 생성하고 실행
// node.js에서 index.js나 server.js처럼 시작점이 되는 파일임.(entry point)
async function bootstrap() {
  // 가장 큰 root 모듈인 AppModule을 생성
  const app = await NestFactory.create(AppModule);
  // 3000번 포트에서 앱 실행
  await app.listen(3000);
}
bootstrap();

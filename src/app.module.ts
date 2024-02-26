import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
// app.module.ts: 앱 모듈을 정의
@Module({
  imports: [BoardsModule],
})
export class AppModule {}

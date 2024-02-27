import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    // 타입 정의는 선택 사항이지만 타입을 정의해줌으로써 원하는 타입과 다른 코드를 사용할 시 에러가 발생함.
    // 또한 코드를 읽는 입장에서 더 코드를 쉽게 이해할 수 있음.
    @Get('/')
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

}

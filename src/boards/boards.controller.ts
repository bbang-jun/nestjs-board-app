import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    // 타입 정의는 선택 사항이지만 타입을 정의해줌으로써 원하는 타입과 다른 코드를 사용할 시 에러가 발생함.
    // 또한 코드를 읽는 입장에서 더 코드를 쉽게 이해할 수 있음.
    @Get('/')
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    // @Post()
    // createBoard(
    //     @Body('title') title: string, 
    //     @Body('description') description: string): Board{
    //     return this.boardsService.createBoard(title, description);
    // }

    // 게시물 생성 API
    @Post()
    @UsePipes(ValidationPipe) // handler level의 pipe 사용(유효성 검사를 위해 built-in pipe 6개 중 하나인 ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDto): Board{
        return this.boardsService.createBoard(createBoardDto);
    }

    // id로 게시물 조회 API
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board{
        return this.boardsService.getBoardById(id);
    }

    // 게시물 삭제 API
    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void{
        this.boardsService.deleteBoard(id);
    }

    // 게시물 status 수정 API
    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        // status 값만 유효성 체크를 하면 되므로, parameter level의 pipe 사용
        @Body('status', BoardStatusValidationPipe) status: BoardStatus){
        return this.boardsService.updateBoardStatus(id, status);
    }
}

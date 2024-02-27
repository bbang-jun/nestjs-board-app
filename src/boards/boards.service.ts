import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    // 아래 코드에서 Board[]는 return 되는 타입
    getAllBoards(): Board[]{
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto){
        
        // const {title} = createBoardDto;는 const title = createBoardDto.title;와 동일
        const {title, description} = createBoardDto;
        const board: Board = {
            id: uuid(), // uuid 모듈을 사용하여 고유한 id 생성
            title, // title: title과 동일함
            description, // description: description과 동일함
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }
}

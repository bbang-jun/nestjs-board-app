import { Injectable, NotFoundException } from '@nestjs/common';
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

    getBoardById(id: string): Board{
        const found = this.boards.find((board) => board.id === id);

        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    deleteBoard(id: string): void{
        const found = this.getBoardById(id);
        // 삭제하고자 하는 id가 다른 것만 boards에 남김으로써 삭제하고자 id는 필터에서 제외됨.
        this.boards = this.boards.filter((board) => board.id !== found.id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board{
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}

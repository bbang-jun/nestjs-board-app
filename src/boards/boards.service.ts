import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    // 아래 코드에서 Board[]는 return 되는 타입
    getAllBoards(): Board[]{
        return this.boards;
    }
}

// 클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 interface보다 더 유용하므로

import { IsNotEmpty } from "class-validator";

// 클래스를 이용해서 DTO를 작성하도록 공식 문서에서 추천하고 있음.
export class CreateBoardDto{
    // 유효성 체크를 위한 데코레이터
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}
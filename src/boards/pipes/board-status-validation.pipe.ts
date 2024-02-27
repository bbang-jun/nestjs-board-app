import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

export class BoardStatusValidationPipe implements PipeTransform{
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    // value는 처리가 된 인자의 값(value) 즉, 수정한 값
    // metadata는 인자에 대한 메타 데이터를 포함한 객체 ({ metatype: [Function: String], type: 'body', data: 'status' })
    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`);
        }

        return value;
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}
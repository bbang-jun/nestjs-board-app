
// 모델 정의를 위해서는 class를 이용하거나 interface를 이용함.
// interface: 변수의 타입만을 체크
// class: 변수의 타입도 체크하고, 인스턴스 또한 생성할 수 있음.
export interface Board{
    id: string;
    title: string;
    description: string;
    status: BoardStatus
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
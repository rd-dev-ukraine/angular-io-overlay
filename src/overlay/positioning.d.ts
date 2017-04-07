export declare const enum AlignType {
    Left = 1,
    Top = 1,
    Center = 2,
    Middle = 2,
    Right = 3,
    Bottom = 3,
}
export interface ElementAlign {
    horizontal: AlignType;
    vertical: AlignType;
}
export interface Alignment {
    element: ElementAlign;
    target: ElementAlign;
}
export interface Point {
    top: number;
    left: number;
}
export interface Rect extends Point {
    width: number;
    height: number;
}
export declare function position(element: Rect, target: Rect, ...positions: Alignment[]): Rect;

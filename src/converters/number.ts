export type TNumber = {
    type: 'number',
    value: number
};

export const numberConv = (value: number) => {
    return {
        type: 'number',
        value: value
    } as TNumber;
}
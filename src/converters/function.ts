export type TFunction = {
    type: 'function',
    value: string
};

export const functionConv = (value: string) => {
    return {
        type: 'function',
        value: String(value)
    } as TFunction;
}
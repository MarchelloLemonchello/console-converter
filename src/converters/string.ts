export type TString = {
    type: 'string',
    value: string
};
export const stringConv = (value: string) => {
    return {
        type: 'string',
        value: value
    } as TString;
}
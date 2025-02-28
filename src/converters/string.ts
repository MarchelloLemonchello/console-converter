import {TTypeConverter} from "../types";

export type TString = {
    type: 'string',
    value: string
};
export const stringConverter: TTypeConverter = (value) => {
    if (typeof value !== 'string'){
        throw new Error()
    }
    return {
        type: 'string',
        value: value
    } as TString;
}

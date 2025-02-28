import {TTypeConverter} from "../types";

export type TFunction = {
    type: 'function',
    value: string
};

export const functionConverter: TTypeConverter = (value) => {
    if (typeof value !== 'function'){
        throw new Error()
    }
    return {
        type: 'function',
        value: String(value)
    } as TFunction;
}
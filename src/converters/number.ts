import {TTypeConverter} from "../types";

export type TNumber = {
    type: 'number',
    value: number
};

export const numberConverter: TTypeConverter = (value) => {
    if (typeof value !== 'number'){
        throw new Error()
    }
    return {
        type: 'number',
        value: value
    } as TNumber;
}
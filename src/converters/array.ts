import {TAny, TTypeConverter} from "../types";

export type TArray = {
    type: "array";
    value: TAny[]
};

export const arrayConverter: TTypeConverter = (value, converterFunction) => {
    if (!Array.isArray(value)) {
        throw new Error()
    }
    const arrayValue: TAny[] = value.map((arrayElement) => converterFunction(arrayElement));
    return {
        type: 'array',
        value: arrayValue
    } as TArray;
}
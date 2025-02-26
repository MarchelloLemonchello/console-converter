import {multiConverter, TAny} from "./index";

export type TArray = {
    type: "array";
    value: TAny[]
};

export const arrayConv = (value) => {
    const arrayValue = value.map((arrayElement) => multiConverter(arrayElement));
    return {
        type: 'array',
        value: arrayValue
    } as TArray;
}
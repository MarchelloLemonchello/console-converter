import {TAny, TTypeConverter} from "../types";

export type TObject = {
    type: "object";
    value: Record<string, TAny>
}

export const objectConverter: TTypeConverter = (value, converterFunction) => {
    if (typeof value !== 'object'){
        throw new Error()
    }
    const objectValue: Record<string, TAny> = {};
    Object.entries(value).forEach(([key, currentValue]) => {
        objectValue[key] = converterFunction(currentValue);
    })

    return {
        type: 'object',
        value: objectValue
    } as TObject;
}
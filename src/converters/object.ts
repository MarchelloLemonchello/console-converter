import {multiConverter, TAny} from "./index";

export type TObject = {
    type: "object";
    value: Record<string, TAny>
}

export const objectConv = (value: Record<string, any> ) => {
    const objectValue = {};
    for (var key in value) {
        objectValue[key] = multiConverter(value[key]);
    }
    return {
        type: 'object',
        value: objectValue
    } as TObject;
}
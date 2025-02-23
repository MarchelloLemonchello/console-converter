import { multiConverter } from "./index.js";

export const objectConv = (value) => {
    const objectValue = {};
    for (var key in value) {
        objectValue[key] = multiConverter(value[key]);
    }
    return {
        type: 'object',
        value: objectValue
    }
}
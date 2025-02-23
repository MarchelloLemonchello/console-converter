import { multiConverter } from "./index.js";

export const arrayConv = (value) => {
    const arrayValue = value.map((arrayElement) => multiConverter(arrayElement));
    return {
        type: 'array',
        value: arrayValue
    }
}
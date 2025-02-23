import {numberConv} from "./number.js";
import {stringConv} from "./string.js";
import {objectConv} from "./object.js"
import {arrayConv} from "./array.js";
import {functionConv} from "./function.js";


const determinant = {
    number: numberConv,
    string: stringConv,
    object: objectConv,
    array: arrayConv,
    function: functionConv,
}

export function multiConverter(value) {
    let type = typeof value;
     if (type === 'object' && Array.isArray(value)) type = 'array';

    return determinant[type](value)
}

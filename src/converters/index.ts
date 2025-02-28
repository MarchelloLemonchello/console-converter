import {numberConverter} from "./number";
import {stringConverter} from "./string";
import {objectConverter} from "./object"
import {arrayConverter} from "./array";
import {functionConverter} from "./function";
import {bigintConverter} from "./bigint";
import {booleanConverter} from "./boolean";
import {symbolConverter} from "./symbol";
import {undefinedConverter} from "./undefined";
import {nullConverter} from "./null";

import {TAny} from "../types";
import {MapConverter} from "./map";

const determinant = {
    string: stringConverter,
    number: numberConverter,
    bigint: bigintConverter,
    boolean: booleanConverter,
    symbol: symbolConverter,
    undefined: undefinedConverter,
    object: objectConverter,
    array: arrayConverter,
    function: functionConverter,
    null: nullConverter,
    map: MapConverter
};

export function converter(value: any) {
    let type: TAny['type'] = typeof value;
    if (type === 'object') {
        if (Array.isArray(value)) type = 'array';
        if (value === null ) type = 'null'
        if (value instanceof Map) type = 'map';
    }

    return determinant[type](value, converter)
}

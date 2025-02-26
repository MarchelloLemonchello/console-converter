import {numberConv, TNumber} from "./number";
import {stringConv, TString} from "./string";
import {objectConv, TObject} from "./object"
import {arrayConv, TArray} from "./array";
import {functionConv, TFunction} from "./function";
import {bigintConv, TBigint} from "./bigint";
import {booleanConv, TBoolean} from "./boolean";
import {symbolConv, TSymbol} from "./symbol";
import {TUndefined, undefinedConv} from "./undefined";

const determinant = {
    string: stringConv,
    number: numberConv,
    bigint: bigintConv,
    boolean: booleanConv,
    symbol: symbolConv,
    undefined: undefinedConv,
    object: objectConv,
    array: arrayConv,
    function: functionConv,
};

export type TAny = TString | TNumber | TBigint | TBoolean | TSymbol | TUndefined | TArray | TObject | TFunction;

export function multiConverter(value: any) {
    let type: TAny['type'] = typeof value;
    if (type === 'object' && Array.isArray(value)) type = 'array';

    return determinant[type](value)
}

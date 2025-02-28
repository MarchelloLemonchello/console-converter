import {TString} from "./converters/string";
import {TNumber} from "./converters/number";
import {TBigint} from "./converters/bigint";
import {TBoolean} from "./converters/boolean";
import {TSymbol} from "./converters/symbol";
import {TUndefined} from "./converters/undefined";
import {TArray} from "./converters/array";
import {TObject} from "./converters/object";
import {TFunction} from "./converters/function";
import {TNull} from "./converters/null";
import {TMap, TMapItem} from "./converters/map";

export type TAny = TString | TNumber | TBigint | TBoolean | TSymbol | TUndefined | TArray | TObject | TFunction | TNull | TMap | TMapItem;

export type TConverter = (value:any) => TAny
export  type TTypeConverter = (value: unknown, converterFunction:TConverter) => TAny
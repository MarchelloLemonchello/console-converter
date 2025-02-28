import {TTypeConverter} from "../types";

export type TSymbol = {
  type: 'symbol',
  value: string
};
export const symbolConverter: TTypeConverter = (value) => {
  if (typeof value !== 'symbol'){
    throw new Error()
  }
  return {
    type: 'symbol',
    value: String(value)
  } as TSymbol;
}
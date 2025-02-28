import {TTypeConverter} from "../types";

export type TBigint = {
  type: 'bigint',
  value: string
};

export const bigintConverter: TTypeConverter = (value) => {
  if (typeof value !== 'bigint'){
    throw new Error()
  }
  return {
    type: 'bigint',
    value: String(value)
  } as TBigint;
}
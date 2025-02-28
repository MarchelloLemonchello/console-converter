import {TTypeConverter} from "../types";

export type TUndefined = {
  type: 'undefined',
  value: undefined
};
export const undefinedConverter: TTypeConverter = (value) => {
  if (typeof value !== 'undefined'){
    throw new Error()
  }
  return {
    type: 'undefined',
    value: value
  } as TUndefined;
}
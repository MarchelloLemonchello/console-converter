import {TTypeConverter} from "../types";

export type TNull = {
  type: 'null',
  value: null
};
export const nullConverter: TTypeConverter = (value) => {
  if (value !== null){
    throw new Error()
  }
  return {
    type: 'null',
    value: null
  } as TNull;
}
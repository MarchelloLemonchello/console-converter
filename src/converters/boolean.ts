import {TTypeConverter} from "../types";

export type TBoolean = {
  type: 'boolean',
  value: boolean
};

export const booleanConverter: TTypeConverter = (value) => {
  if (typeof value !== 'boolean'){
    throw new Error()
  }
  return {
    type: 'boolean',
    value: value
  } as TBoolean;
}
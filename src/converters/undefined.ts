export type TUndefined = {
  type: 'undefined',
  value: undefined
};
export const undefinedConv = (value: undefined) => {
  return {
    type: 'undefined',
    value: value
  } as TUndefined;
}
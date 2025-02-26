export type TBoolean = {
  type: 'boolean',
  value: boolean
};

export const booleanConv = (value: boolean) => {
  return {
    type: 'boolean',
    value: value
  } as TBoolean;
}
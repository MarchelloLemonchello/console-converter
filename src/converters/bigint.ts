export type TBigint = {
  type: 'bigint',
  value: bigint
};

export const bigintConv = (value: bigint) => {
  return {
    type: 'bigint',
    value: value
  } as TBigint;
}
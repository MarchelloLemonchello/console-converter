export type TSymbol = {
  type: 'symbol',
  value: symbol
};
export const symbolConv = (value: symbol) => {
  return {
    type: 'symbol',
    value: value
  } as TSymbol;
}
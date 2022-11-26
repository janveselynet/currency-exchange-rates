import { Rate } from '../rates/Rate';

export const convertCzkToOther = (
  amountInCzk: number,
  targetedCurrencyCode: string,
  rates: Array<Rate>,
): number => {
  const rate = rates.find(rate => rate.currencyCode === targetedCurrencyCode);
  if (rate === undefined) {
    throw new Error(`Unknown rate for currency ${targetedCurrencyCode}`);
  }
  return amountInCzk / rate.rate;
}

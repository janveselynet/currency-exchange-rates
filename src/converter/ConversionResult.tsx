import React from 'react';

const roundForDisplay = (amount: number): number =>
  Math.round(amount * 1000) / 1000;

interface ConversionResultProps {
  amountInCzk: number;
  amountInTargetedCurrency: number;
  targetedCurrencyCode: string;
};

export default function ConversionResult({
  amountInCzk,
  amountInTargetedCurrency,
  targetedCurrencyCode
}: ConversionResultProps): JSX.Element {
  const roundedAmountInCzk = roundForDisplay(amountInCzk);
  const roundedAmountInTargetedCurrency = roundForDisplay(amountInTargetedCurrency);
  
  return <p>{roundedAmountInCzk} CZK = {roundedAmountInTargetedCurrency} {targetedCurrencyCode}</p>;
}

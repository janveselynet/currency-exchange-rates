import React from 'react';

interface ConversionResultProps {
  amountInCzkToConvert: number;
  amountInTargetedCurrency: number;
  targetedCurrencyCode: string;
};

export default function ConversionResult({
  amountInCzkToConvert,
  amountInTargetedCurrency,
  targetedCurrencyCode
}: ConversionResultProps): JSX.Element {
  return <p>{amountInCzkToConvert} CZK = {amountInTargetedCurrency} {targetedCurrencyCode}</p>;
}

import React from 'react';

interface ConversionResultProps {
  amountInCzkToConvert: number;
  targetedCurrencyCode: string;
};

export default function ConversionResult({
  amountInCzkToConvert,
  targetedCurrencyCode
}: ConversionResultProps): JSX.Element {
  return <p>You want to convert {amountInCzkToConvert} CZK to {targetedCurrencyCode}.</p>;
}
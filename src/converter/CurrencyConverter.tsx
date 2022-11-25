import React from 'react';
import { Rate } from '../rates/Rate';
import ConversionResult from './ConversionResult';
import CurrencyConverterForm from './CurrencyConverterForm';

interface CurrencyConverterProps {
  availableRates: Array<Rate>;
}

export default function CurrencyConverter({
  availableRates,
}: CurrencyConverterProps): JSX.Element {
  const [amountInCzkToConvert, setAmountInCzkToConvert] = React.useState<number>(0);
  const [targetedCurrencyCode, setTargetedCurrencyCode] = React.useState<string>('CZK');

  const availableCurrencyCodes = availableRates.map(
    (availableRate) => availableRate.currencyCode,
  );

  const handleFormSubmit = (amountInCzkToConvert: number, targetedCurrencyCode: string): void => {
    setAmountInCzkToConvert(amountInCzkToConvert);
    setTargetedCurrencyCode(targetedCurrencyCode);
  };

  return (
    <React.Fragment>
      <CurrencyConverterForm
        availableCurrencyCodes={availableCurrencyCodes}
        onFormSubmitted={handleFormSubmit}
      />
      <ConversionResult
        amountInCzkToConvert={amountInCzkToConvert}
        targetedCurrencyCode={targetedCurrencyCode}
      />
    </React.Fragment>
  );
};

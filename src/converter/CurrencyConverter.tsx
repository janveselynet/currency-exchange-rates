import React from 'react';
import { Rate } from '../rates/Rate';
import ConversionResult from './ConversionResult';
import CurrencyConverterForm from './CurrencyConverterForm';
import { convertCzkToOther } from './currencyConversion';

interface CurrencyConverterProps {
  availableRates: Array<Rate>;
}

export default function CurrencyConverter({
  availableRates,
}: CurrencyConverterProps): JSX.Element {
  const availableCurrencyCodes = availableRates.map(
    (availableRate) => availableRate.currencyCode,
  );

  const [amountInCzkToConvert, setAmountInCzkToConvert] = React.useState<number>(0);
  const [targetedCurrencyCode, setTargetedCurrencyCode] = React.useState<string>(
    availableCurrencyCodes[0]
  );

  const handleFormSubmit = (amountInCzkToConvert: number, targetedCurrencyCode: string): void => {
    setAmountInCzkToConvert(amountInCzkToConvert);
    setTargetedCurrencyCode(targetedCurrencyCode);
  };

  const amountInTargetedCurrency = convertCzkToOther(amountInCzkToConvert, targetedCurrencyCode, availableRates);

  return (
    <React.Fragment>
      <CurrencyConverterForm
        availableCurrencyCodes={availableCurrencyCodes}
        onFormSubmitted={handleFormSubmit}
      />
      <ConversionResult
        amountInCzk={amountInCzkToConvert}
        amountInTargetedCurrency={amountInTargetedCurrency}
        targetedCurrencyCode={targetedCurrencyCode}
      />
    </React.Fragment>
  );
};

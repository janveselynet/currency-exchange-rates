import React from 'react';
import RatesTable from './rates/table/RatesTable';
import { rates } from './rates/__fixtures__/rates';
import CurrencyConverter from './converter/CurrencyConverter';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <h1>Currency converter</h1>
      <CurrencyConverter availableRates={rates} />

      <h1>Currency exchange rates</h1>
      <RatesTable rates={rates} />
    </React.Fragment>
  );
}

import React from 'react';
import RatesTable from './rates/table/RatesTable';
import { rates } from './rates';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <h1>Currency exchange rates</h1>
      <RatesTable rates={rates} />
    </React.Fragment>
  );
}

import React from 'react';
import RatesTable from './rates/table/RatesTable';
import CurrencyConverter from './converter/CurrencyConverter';
import { useQuery } from '@tanstack/react-query';
import { fetchRates } from './rates/api/ratesApi';
import { Rate } from './rates/Rate';

export default function App(): JSX.Element {
  const ratesQuery = useQuery<Array<Rate>>({ queryKey: ['rates'], queryFn: fetchRates });

  if (ratesQuery.isLoading) {
    return <p>Loading rates...</p>;
  }
  if (ratesQuery.isError) {
    const errorMessage = `Error occurred when loading rates. See details: ${ratesQuery.error}`;
    return <p>{errorMessage}</p>;
  }
  if (ratesQuery.data?.length === 0) {
    return <p>No rates available, sorry.</p>;
  }

  return (
    <React.Fragment>
      <h1>Currency converter</h1>
      <CurrencyConverter availableRates={ratesQuery.data} />

      <h1>Currency exchange rates</h1>
      <RatesTable rates={ratesQuery.data} />
    </React.Fragment>
  );
}

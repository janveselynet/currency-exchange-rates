import { render } from '@testing-library/react';
import React from 'react';
import RatesTable from './RatesTable';
import { rates } from './__fixtures__/rates';

describe('RatesTable', () =>{
  it('renders table with currency exchange rates', () => {
    const { container } = render(<RatesTable rates={rates} />);
    expect(container).toMatchSnapshot();
  });
});

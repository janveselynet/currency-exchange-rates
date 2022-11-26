import { render } from '@testing-library/react';
import React from 'react';
import ConversionResult from './ConversionResult';

describe('ConversionResult', () => {
  it('renders properly', () => {
    const props = {
      amountInCzkToConvert: 100,
      amountInTargetedCurrency: 250,
      targetedCurrencyCode: 'USD',
    };
    const { container } = render(<ConversionResult {...props} />);
    expect(container).toMatchSnapshot();
  });
});

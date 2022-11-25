import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CurrencyConverterForm from './CurrencyConverterForm';

describe('CurrencyConverterForm', () => {
  const availableCurrencyCodes = ['CZK', 'USD', 'EUR'];

  it('renders properly', () => {
    const { container } = render(
      <CurrencyConverterForm
        availableCurrencyCodes={availableCurrencyCodes}
        onFormSubmitted={jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('submits entered data when button is clicked', () => {
    const onFormSubmittedMock = jest.fn();

    render(
      <CurrencyConverterForm
        availableCurrencyCodes={availableCurrencyCodes}
        onFormSubmitted={onFormSubmittedMock}
      />
    );

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '100' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'USD' } });
    fireEvent.click(screen.getByRole('button'));

    expect(onFormSubmittedMock).toHaveBeenCalledWith(100, 'USD');
  });

  it('submits meaningful data if nothing is explicitly set', () => {
    const onFormSubmittedMock = jest.fn();

    render(
      <CurrencyConverterForm
        availableCurrencyCodes={availableCurrencyCodes}
        onFormSubmitted={onFormSubmittedMock}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onFormSubmittedMock).toHaveBeenCalledWith(0, 'CZK');
  });

  it('clears amount input after submitting form', () => {
    render(
      <CurrencyConverterForm
        availableCurrencyCodes={availableCurrencyCodes}
        onFormSubmitted={jest.fn()}
      />
    );

    const amountInput = screen.getByRole('spinbutton');
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(screen.getByRole('button'));

    expect(amountInput).toHaveValue(null);
  });
});

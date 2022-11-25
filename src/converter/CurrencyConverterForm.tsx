import React from 'react';
import styled from "styled-components";

const NumberInput = styled.input`
  margin-right: 10px;
  padding: 7px;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
`;

const Select = styled.select`
  margin: 0 10px;
  padding: 7px;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: #2980b9;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  padding: 10px 16px;
  text-align: center;

  :hover,
  :focus {
    background-color: #5ca9db;
  }
`;

interface CurrencyConverterForm {
  availableCurrencyCodes: Array<string>;
  onFormSubmitted: (amountInCzk: number, targetedCurrencyCode: string) => void;
}

export default function CurrencyConverterForm({
  availableCurrencyCodes,
  onFormSubmitted,
}: CurrencyConverterForm): JSX.Element {
  const [amount, setAmount] = React.useState<string>('');
  const [currencyCode, setCurrencyCode] = React.useState<string>(availableCurrencyCodes[0]);

  const handleAmountChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handleCurrencyCodeChanged = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrencyCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const parsedAmount = parseFloat(amount) || 0;
    onFormSubmitted(parsedAmount, currencyCode);

    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <NumberInput
        id="amount"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChanged}
      />

      CZK to

      <Select
        name="currencyCode"
        value={currencyCode}
        onChange={handleCurrencyCodeChanged}
      >
        {availableCurrencyCodes.map((currencyCode, key) => (
          <option key={key} value={currencyCode}>{currencyCode}</option>
        ))}
      </Select>

      <Button>Convert</Button>
    </form>
  );
};

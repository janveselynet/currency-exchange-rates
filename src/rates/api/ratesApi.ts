import { Rate } from '../Rate';

const CNB_RATES_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';
const CSV_DELIMITER = '|';

const parseCsvIntoRates = (textContent: string): Array<Rate> => {
  const rows = textContent.split("\n");
  return rows
    .slice(2, rows.length - 1)
    .map((row: string): Rate => {
      const values = row.split(CSV_DELIMITER);
      return {
        country: values[0] ?? '',
        currency: values[1] ?? '',
        amount: parseInt(values[2]) ?? 1,
        currencyCode: values[3] ?? '',
        rate: parseFloat(values[4]) ?? 1,
      };
    });
};

export const fetchRates = async (): Promise<Array<Rate>> => {
  const response = await fetch(CNB_RATES_URL);

  if (!response.ok) {
    throw new Error(`Unable to fetch currency exchange rates from CNB, HTTP status: ${response.status}`);
  }

  const textContent = await response.text();

  return parseCsvIntoRates(textContent);
};

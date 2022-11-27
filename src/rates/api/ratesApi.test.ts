import fetchMock from 'fetch-mock';
import fs from 'fs/promises';
import { rates as expectedRates } from '../__fixtures__/rates';
import { fetchRates } from './ratesApi';

const CNB_RATES_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

describe('ratesApi', () => {
  afterEach(() => fetchMock.reset());

  it('fetches rates from CNB properly', async () => {
    const endpointMockContent = await fs.readFile(`${__dirname}/__fixtures__/rates.txt`, { encoding: "utf8" });
    fetchMock.get(CNB_RATES_URL, endpointMockContent);

    const fetchedRates = await fetchRates();

    expect(fetchedRates).toStrictEqual(expectedRates);
  });
});

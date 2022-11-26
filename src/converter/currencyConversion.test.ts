import { rates } from '../rates/__fixtures__/rates';
import { convertCzkToOther } from './currencyConversion';

describe('currencyConversion', () => {
  it('converts amount in CZK to other currency', () => {
    const result = convertCzkToOther(100, 'AUD', rates);
    expect(result).toBeCloseTo(6.317);
  });

  it('throws error if rate for targeted currency is not available', () => {
    expect(
      () => convertCzkToOther(100, 'FOO', rates),
    ).toThrow('Unknown rate for currency FOO');
  });
});

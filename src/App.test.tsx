import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from './App';
import * as ratesApi from './rates/api/ratesApi';
import { rates } from './rates/__fixtures__/rates';

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const getAppElementToRender = (): JSX.Element => {
    const testQueryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });

    return (
      <QueryClientProvider client={testQueryClient}>
        <App />
      </QueryClientProvider>
    );
  }

  it('renders loading state when rates are initially loading', () => {
    jest
      .spyOn(ratesApi, 'fetchRates')
      .mockImplementation(async () => new Promise(() => null));
    
    const { container } = render(getAppElementToRender());
    expect(container).toMatchSnapshot();
  });

  it('renders error state when fetching rates fails', async () => {
    jest
      .spyOn(ratesApi, 'fetchRates')
      .mockRejectedValue(new Error('Unable to fetch rates'));

    const { container } = render(getAppElementToRender());
    await waitFor(() => screen.getByText(/error/i));
    expect(container).toMatchSnapshot();
  });

  it('renders properly when no rates available', async () => {
    jest
      .spyOn(ratesApi, 'fetchRates')
      .mockResolvedValue([]);

    const { container } = render(getAppElementToRender());
    await waitFor(() => screen.getByText(/No rates available/i));
    expect(container).toMatchSnapshot();
  });

  it('renders properly when rates available', async () => {
    jest
      .spyOn(ratesApi, 'fetchRates')
      .mockResolvedValue(rates);
    
    const { container } = render(getAppElementToRender());
    await waitFor(() => screen.getByText(/Currency converter/i));
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import styled from "styled-components";
import { Rate } from '../Rate';

const Table = styled.table`
  border: none;
  border-collapse:collapse;

  td,
  th {
    border: none;
    padding: 7px 10px;
  }

  thead > tr {
    font-weight: 900;
    color: #ffffff;
    background: #2980b9;
  }

  tbody tr {
    :nth-of-type(odd) {
      background: #e9e9e9;
    }

    td:last-child {
      text-align: right;
    }
  }
`;

interface RatesTableProps {
  rates: Array<Rate>;
};

export default function RatesTable({ rates }: RatesTableProps): JSX.Element {
  return (
    <Table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Currency</th>
          <th>Currency code</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate, index) => (
          <tr key={index}>
            <td>{rate.country}</td>
            <td>{rate.currency}</td>
            <td>{rate.currencyCode}</td>
            <td>{rate.rate.toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

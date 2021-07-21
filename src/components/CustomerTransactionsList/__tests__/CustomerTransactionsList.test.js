import React from 'react';
import { shallow } from 'enzyme';
import CustomerTransactionsList from '../CustomerTransactionsList';
import Router from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const mockCustomers = [
  { customerId: 1, customerName: 'John Smith' },
  { customerId: 2, customerName: 'Jenny Smith' },
];
const mockCustomerTransactionsList = [
  {
    amount: 249,
    currency: 'USD',
    customer: { customerId: 1, customerName: 'John Smith' },
    productName: 'Table',
    transactionDate: '2021-07-10',
    transactionId: 0,
  },
  {
    amount: 80,
    currency: 'USD',
    customer: { customerId: 1, customerName: 'John Smith' },
    productName: 'Chair',
    transactionDate: '2021-06-10',
    transactionId: 1,
  },
  {
    amount: 394,
    currency: 'USD',
    customer: { customerId: 2, customerName: 'Jenny Smith' },
    productName: 'Lamp',
    transactionDate: '2021-07-11',
    transactionId: 2,
  },
];

describe('CustomerTransactionsList', () => {
  let wrapper;

  it('should match snapshot', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });

    wrapper = shallow(
      <CustomerTransactionsList
        customers={mockCustomers}
        transactions={mockCustomerTransactionsList}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

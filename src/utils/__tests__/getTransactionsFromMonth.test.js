import { getTransactionsFromMonth } from '../getTransactionsFromMonth';
import MockDate from 'mockdate';

const transactions = [
  {
    amount: 249,
    currency: 'USD',
    customer: { customerId: 1, customerName: 'John Smith' },
    productName: 'Table',
    transactionDate: '2021-05-10',
    transactionId: 0,
  },
  {
    amount: 80,
    currency: 'USD',
    customer: { customerId: 1, customerName: 'John Smith' },
    productName: 'Chair',
    transactionDate: '2021-05-11',
    transactionId: 1,
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
    amount: 80,
    currency: 'USD',
    customer: { customerId: 1, customerName: 'John Smith' },
    productName: 'Chair',
    transactionDate: '2021-06-11',
    transactionId: 1,
  },
];

describe('getCustomerTransactions', () => {
  beforeEach(() => {
    MockDate.set('2021-06-12');
  });

  it('should return customer transactions for current month', () => {
    expect(getTransactionsFromMonth(transactions, 0)).toEqual([
      {
        amount: 80,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Chair',
        transactionDate: '2021-06-10',
        transactionId: 1,
      },
      {
        amount: 80,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Chair',
        transactionDate: '2021-06-11',
        transactionId: 1,
      },
    ]);
  });

  it('should return customer transactions for previous month', () => {
    expect(getTransactionsFromMonth(transactions, 1)).toEqual([
      {
        amount: 249,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Table',
        transactionDate: '2021-05-10',
        transactionId: 0,
      },
      {
        amount: 80,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Chair',
        transactionDate: '2021-05-11',
        transactionId: 1,
      },
    ]);
  });
});

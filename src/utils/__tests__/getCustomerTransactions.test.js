import { getCustomerTransactions } from '../getCustomerTransactions';

const transactions = [
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
const customerId = '1';

describe('getCustomerTransactions', () => {
  it('should return customer transactions for given customer id', () => {
    expect(getCustomerTransactions(transactions, customerId)).toEqual([
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
    ]);
  });
});

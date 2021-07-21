import React from 'react';
import { getRewardPoints } from '../getRewardPoints';

/*
A customer receives 2 points for every dollar spent over $100 in each transaction,
plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points)
*/

describe('getRewardPoints', () => {
  it('should calculate reward points properly for transaction under 100$', () => {
    const transactions = [
      {
        amount: 87,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Table',
        transactionDate: '2021-05-10',
        transactionId: 0,
      },
    ];
    expect(getRewardPoints(transactions)).toEqual(37);
  });

  it('should calculate reward points properly for transaction over 100$', () => {
    const transactions = [
      {
        amount: 249,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Table',
        transactionDate: '2021-05-10',
        transactionId: 0,
      },
    ];
    expect(getRewardPoints(transactions)).toEqual(348);
  });

  it('should calculate reward points properly for mixed transactions', () => {
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
        amount: 100,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Chair',
        transactionDate: '2021-05-11',
        transactionId: 2,
      },
      {
        amount: 350,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Chair',
        transactionDate: '2021-05-11',
        transactionId: 3,
      },
    ];
    expect(getRewardPoints(transactions)).toEqual(978);
  });

  it('should calculate reward points properly for recruitment task example', () => {
    const transactions = [
      {
        amount: 120,
        currency: 'USD',
        customer: { customerId: 1, customerName: 'John Smith' },
        productName: 'Table',
        transactionDate: '2021-05-10',
        transactionId: 0,
      },
    ];
    expect(getRewardPoints(transactions)).toEqual(90);
  });
});

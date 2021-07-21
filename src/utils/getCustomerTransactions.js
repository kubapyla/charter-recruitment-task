const getCustomerTransactions = (transactions, customerId) =>
  transactions.filter(
    (transaction) => transaction.customer.customerId === Number(customerId)
  );

export { getCustomerTransactions };

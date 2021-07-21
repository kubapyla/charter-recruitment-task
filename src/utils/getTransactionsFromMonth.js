import dayjs from 'dayjs';

const getTransactionsFromMonth = (transactions, monthsBack) => {
  const monthToCompare = dayjs().subtract(monthsBack, 'month').month();
  return transactions.filter(
    (item) => dayjs(item.transactionDate).month() === monthToCompare
  );
};

export { getTransactionsFromMonth };

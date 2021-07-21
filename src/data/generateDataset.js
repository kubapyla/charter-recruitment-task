import faker from 'faker';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);

const generateAmount = (min = 1, max = 500) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateCustomers = () => {
  const customers = new Array(5).fill({});
  return customers.map((customer, customerIndex) => ({
    customerId: customerIndex + 1,
    customerName: faker.name.findName(),
  }));
};

const generateDataset = () => {
  const customers = generateCustomers();
  const transactions = new Array(100).fill({});

  return {
    customers,
    transactions: transactions.map((item, itemIndex) => ({
      transactionId: itemIndex,
      customer: customers[Math.floor(Math.random() * customers.length)],
      amount: generateAmount(),
      currency: 'USD',
      transactionDate: dayjs
        .between(dayjs().subtract(3, 'month'), dayjs())
        .format('YYYY-MM-DD'),
      productName: faker.commerce.productName(),
    })),
  };
};

export { generateDataset };

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Heading,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { arrayOf, number, shape, string } from 'prop-types';
import {
  getCustomerTransactions,
  getRewardPoints,
  getTransactionsFromMonth,
} from 'utils';
import dayjs from 'dayjs';

const CustomerTransactionsList = ({ customers, transactions }) => {
  const { id } = useParams();
  const [selectedMonth, selectMonth] = useState('ALL');

  const customerInformations = customers.find(
    (customer) => customer.customerId === Number(id)
  );

  const customerTransactions = getCustomerTransactions(transactions, id);

  const renderHeader = () => {
    return (
      <Thead>
        <Tr>
          <Th>Transaction ID</Th>
          <Th>Product name</Th>
          <Th>Transaction date</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
    );
  };

  const renderRows = (customerTransactionsList) =>
    customerTransactionsList
      .sort((a, b) =>
        dayjs(b.transactionDate).isAfter(dayjs(a.transactionDate)) ? 1 : -1
      )
      .map((customerTransaction) => (
        <Tr key={customerTransaction.transactionId}>
          <Td>{customerTransaction.transactionId}</Td>
          <Td>{customerTransaction.productName}</Td>
          <Td>{customerTransaction.transactionDate}</Td>
          <Td>{`${customerTransaction.amount} ${customerTransaction.currency}`}</Td>
        </Tr>
      ));

  const renderFilterButton = (monthsBack) => (
    <Button
      onClick={() => selectMonth(monthsBack)}
      disabled={Number(selectedMonth) === monthsBack}
    >
      {dayjs().subtract(monthsBack, 'month').format('MMMM')}
    </Button>
  );

  const renderFilters = () => (
    <>
      <Button
        onClick={() => selectMonth('ALL')}
        disabled={selectedMonth === 'ALL'}
      >
        All transactions
      </Button>
      {renderFilterButton(0)}
      {renderFilterButton(1)}
      {renderFilterButton(2)}
      {renderFilterButton(3)}
    </>
  );

  return (
    <Stack spacing={3} paddingTop={10}>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
      >
        <Stack
          paddingBottom={10}
          minW={500}
          align={'center'}
          alignSelf={'center'}
        >
          <Heading fontWeight={600} lineHeight={'110%'}>
            {customerInformations?.customerName}
          </Heading>
          <Stack direction="row" align={'center'} alignSelf={'center'}>
            <Stat minW={200} align={'center'} alignSelf={'center'}>
              <StatLabel>Total points</StatLabel>
              <StatNumber>{getRewardPoints(customerTransactions)}</StatNumber>
            </Stat>
            {selectedMonth !== 'ALL' && (
              <Stat minW={200} align={'center'} alignSelf={'center'}>
                <StatLabel>Active month points</StatLabel>
                <StatNumber>
                  {getRewardPoints(
                    getTransactionsFromMonth(
                      customerTransactions,
                      selectedMonth
                    )
                  )}
                </StatNumber>
              </Stat>
            )}
          </Stack>
        </Stack>
        <Stack direction={'row'}>{renderFilters()}</Stack>
        <Table variant="simple">
          {renderHeader()}
          <Tbody>
            {renderRows(
              selectedMonth !== 'ALL'
                ? getTransactionsFromMonth(customerTransactions, selectedMonth)
                : customerTransactions
            )}
          </Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

CustomerTransactionsList.propTypes = {
  customers: arrayOf(shape({ customerId: number, customerName: string })),
  transactions: arrayOf(
    shape({
      amount: number,
      currency: string,
      customer: shape({ customerId: number, customerName: string }),
      productName: string,
      transactionDate: string,
      transactionId: number,
    })
  ),
};

CustomerTransactionsList.defaultProps = {
  customers: [],
  transactions: [],
};

export default CustomerTransactionsList;

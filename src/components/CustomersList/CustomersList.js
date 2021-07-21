import React from 'react';
import { shape, arrayOf, string, number, func } from 'prop-types';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CustomersList = ({ customers, generateNewDataset }) => {
  const renderHeader = () => {
    return (
      <Thead>
        <Tr>
          <Th>Customer ID</Th>
          <Th>Customer Name</Th>
          <Th isNumeric>Transactions list</Th>
        </Tr>
      </Thead>
    );
  };

  const renderRows = (customers) =>
    customers.map((customer) => (
      <Tr key={customer.customerId}>
        <Td>{customer.customerId}</Td>
        <Td>{customer.customerName}</Td>
        <Td isNumeric>
          <Button
            colorScheme="blue"
            as={Link}
            to={`/customer/${customer.customerId}`}
          >
            See list
          </Button>
        </Td>
      </Tr>
    ));

  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 8, md: 14 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Charter <br />
          <Text as={'span'} color={'green.400'}>
            Recruitment Task
          </Text>
        </Heading>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            onClick={generateNewDataset}
          >
            Generate new dataset
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
      >
        <Heading fontWeight={600} lineHeight={'110%'} paddingBottom={10}>
          Customers List
        </Heading>
        <Table variant="simple">
          {renderHeader()}
          <Tbody>{renderRows(customers)}</Tbody>
        </Table>
      </Stack>
    </>
  );
};

CustomersList.propTypes = {
  customers: arrayOf(shape({ customerId: number, customerName: string })),
  generateNewDataset: func.isRequired,
};

CustomersList.defaultProps = {
  customers: [],
};

export default CustomersList;

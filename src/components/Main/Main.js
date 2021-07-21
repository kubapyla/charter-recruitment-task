import React, { useEffect, useState } from 'react';
import { Container, Button, Stack, Divider } from '@chakra-ui/react';
import { generateDataset } from 'data';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomerTransactionsList from 'components/CustomerTransactionsList';
import CustomersList from 'components/CustomersList';

import customersFixture from 'data/fixtures/customers.json';
import transactionsFixture from 'data/fixtures/transactions.json';

const Main = () => {
  const [dataset, setDataset] = useState({});

  useEffect(() => {
    setDataset({
      customers: customersFixture,
      transactions: transactionsFixture,
    });
  }, []);

  const { transactions, customers } = dataset;

  return (
    <Router>
      <Container maxW={1000} marginBottom={20}>
        <Stack direction={'row'} paddingTop={5} paddingBottom={5}>
          <Button colorScheme="blue" as={Link} to="/">
            Home
          </Button>
        </Stack>
        <Divider />
        <Switch>
          <Route path="/customer/:id">
            <CustomerTransactionsList
              transactions={transactions}
              customers={customers}
            />
          </Route>
          <Route path="/">
            <CustomersList
              customers={customers}
              generateNewDataset={() => setDataset(generateDataset())}
            />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Main;

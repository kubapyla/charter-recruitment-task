import React from 'react';
import { shallow } from 'enzyme';
import CustomersList from '../CustomersList';

const mockGenerateNewDataset = jest.fn();
const mockCustomers = [
  { customerId: 1, customerName: 'John Smith' },
  { customerId: 2, customerName: 'Jenny Smith' },
];

describe('CustomersList', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(
      <CustomersList
        customers={mockCustomers}
        generateNewDataset={mockGenerateNewDataset}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

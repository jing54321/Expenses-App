import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../Components/Container';
import ExpenseItem from '../Components/ExpenseItem';
import ExpenseSummary from '../Components/ExpenseSummary';

const HomeScreen = () => {
  const { expenseItems } = useSelector(state => state.expenseItems);

  return (
    <Container>
      <ExpenseSummary />
      <FlatList data={expenseItems} keyExtractor={item => item.id} renderItem={dataItem => <ExpenseItem item={dataItem.item} />}></FlatList>
    </Container>
  );
};

export default HomeScreen;

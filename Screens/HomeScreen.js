import { useLayoutEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../Components/Container';
import ExpenseItem from '../Components/ExpenseItem';
import ExpenseSummary from '../Components/ExpenseSummary';
import InfoMessage from '../Components/InfoMessage';

const HomeScreen = () => {
  const { expenseItems } = useSelector(state => state.expenseItems);
  const sum = expenseItems.reduce((prev, val) => prev + parseFloat(val.amount), 0);

  return (
    <Container>
      <ExpenseSummary sum={sum}>Total Amount</ExpenseSummary>
      {expenseItems.length === 0 ? (
        <InfoMessage>There is no record.</InfoMessage>
      ) : (
        <FlatList data={expenseItems} keyExtractor={item => item.id} renderItem={dataItem => <ExpenseItem item={dataItem.item} />}></FlatList>
      )}
    </Container>
  );
};

export default HomeScreen;

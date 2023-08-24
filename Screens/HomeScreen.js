import { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Components/Container';
import ExpenseItem from '../Components/ExpenseItem';
import ExpenseSummary from '../Components/ExpenseSummary';
import InfoMessage from '../Components/InfoMessage';
import { getExpenses, resetExpense } from '../Reducers/expense';
import Spinner from 'react-native-loading-spinner-overlay';

const HomeScreen = () => {
  const { expenseItems, loading, error } = useSelector(state => state.expenseItems);
  const dispatch = useDispatch();
  const sum = expenseItems.reduce((prev, val) => prev + parseFloat(val.amount), 0);
  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);
  return (
    <Container>
      <ExpenseSummary sum={sum}>Total Amount</ExpenseSummary>
      <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />
      {error && <Text style={styles.errorStyle}>Data fetching failed!</Text>}
      {!error && !loading && expenseItems.length === 0 ? (
        <InfoMessage>There is no record.</InfoMessage>
      ) : (
        <FlatList data={expenseItems} keyExtractor={item => item.id} renderItem={dataItem => <ExpenseItem item={dataItem.item} />}></FlatList>
      )}
    </Container>
  );
};
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#fff',
  },
  errorStyle: {
    color: 'red',
    padding: 8,
    fontSize: 16,
  },
});
export default HomeScreen;

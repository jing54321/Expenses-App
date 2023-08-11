import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../Components/Container';
import ExpenseItem from '../Components/ExpenseItem';
import moment from 'moment';
import ExpenseSummary from '../Components/ExpenseSummary';
import InfoMessage from '../Components/InfoMessage';

const RecentExpensesScreen = () => {
  const { expenseItems } = useSelector(state => state.expenseItems);
  const recentItems = expenseItems.filter(item => moment().diff(moment(item.date, 'YYYY-MM-DD'), 'day') < 8);
  const sum = recentItems.reduce((prev, val) => prev + parseFloat(val.amount), 0);

  return (
    <Container>
      <ExpenseSummary sum={sum}>Recent 7 Days</ExpenseSummary>
      {recentItems.length === 0 ? (
        <InfoMessage>There is no recent items.</InfoMessage>
      ) : (
        <FlatList data={recentItems} keyExtractor={item => item.id} renderItem={dataItem => <ExpenseItem item={dataItem.item} />}></FlatList>
      )}
    </Container>
  );
};
const styles = StyleSheet.create({});
export default RecentExpensesScreen;

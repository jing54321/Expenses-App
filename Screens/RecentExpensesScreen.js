import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../Components/Container';
import ExpenseItem from '../Components/ExpenseItem';
import moment from 'moment';

const RecentExpensesScreen = () => {
  const { expenseItems } = useSelector(state => state.expenseItems);
  const recentItems = expenseItems.filter(item => moment().diff(moment(item.date, 'YYYY-MM-DD'), 'day') < 8);
  const totalAmount = recentItems.reduce((prev, val) => prev + parseFloat(val.amount), 0);
  const dollarCanadaLocale = Intl.NumberFormat('en-CA');
  return (
    <Container>
      <View style={styles.summary}>
        <Text style={styles.text}>Recent 7 Days</Text>
        <Text style={styles.text}>${dollarCanadaLocale.format(totalAmount)}</Text>
      </View>
      <FlatList data={recentItems} keyExtractor={item => item.id} renderItem={dataItem => <ExpenseItem item={dataItem.item} />}></FlatList>
    </Container>
  );
};
const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#49493c',
    borderRadius: 8,
    elevation: 4,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default RecentExpensesScreen;

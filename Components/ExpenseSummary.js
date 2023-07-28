import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const ExpenseSummary = () => {
  const { expenseItems } = useSelector(state => state.expenseItems);
  const sum = expenseItems.reduce((prev, val) => prev + parseFloat(val.amount), 0).toFixed(2);
  const dollarCanadaLocale = Intl.NumberFormat('en-CA');
  const totalAmount = dollarCanadaLocale.format(sum);

  return (
    <View style={styles.summary}>
      <Text style={styles.text}>Total Amount</Text>
      <Text style={styles.text}>${totalAmount}</Text>
    </View>
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
export default ExpenseSummary;

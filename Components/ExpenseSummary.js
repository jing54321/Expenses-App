import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const ExpenseSummary = ({ children, sum }) => {
  const getFloatFixed = (value, fixed) => {
    return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
  };
  const tempSum = getFloatFixed(sum, 2);
  const amount = tempSum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const totalAmount = amount == 0 ? '0.00' : amount;

  return (
    <View style={styles.summary}>
      <Text style={styles.text}>{children}</Text>
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

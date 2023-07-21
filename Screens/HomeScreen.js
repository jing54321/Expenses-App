import React from 'react';
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../Components/Container';
import ExpenseItem from '../Components/ExpenseItem';

const HomeScreen = () => {
  const { expenseItems } = useSelector(state => state.expenseItems);
  const totalAmount = expenseItems.reduce((prev, val) => prev + val.amount, 0);
  return (
    <Container>
      <View style={styles.summary}>
        <Text style={styles.text}>Total Amount</Text>
        <Text style={styles.text}>${totalAmount}</Text>
      </View>
      <FlatList data={expenseItems} keyExtractor={item => item.id} renderItem={dataItem => <ExpenseItem item={dataItem.item} />}></FlatList>
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
  pressed: {
    opacity: 0.5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#33484d',
    borderRadius: 8,
    elevation: 4,
    marginBottom: 24,
    overflow: 'hidden',
  },
  amountContainer: {
    backgroundColor: '#fff',
    width: 80,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default HomeScreen;

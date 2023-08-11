import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExpenseItem = ({ item }) => {
  const getFloatFixed = (value, fixed) => {
    return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
  };
  const temp = getFloatFixed(item.amount, 2);
  const amount = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const navigation = useNavigation();
  const { description } = item;
  return (
    <View>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.pressed, styles.itemContainer] : styles.itemContainer)}
        android_ripple={{ color: '#fff' }}
        onPress={() => {
          navigation.navigate('ManageExpense', { item: item });
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.text}>{item.date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={{ textAlign: 'right', width: '100%' }}>{amount}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
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
    gap: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  amountContainer: {
    backgroundColor: '#fff',
    width: 110,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default ExpenseItem;

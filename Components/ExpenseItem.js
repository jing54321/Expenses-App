import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const ExpenseItem = ({ item }) => {
  return (
    <View>
      <Pressable style={({ pressed }) => (pressed ? [styles.pressed, styles.itemContainer] : styles.itemContainer)} android_ripple={{ color: '#fff' }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
          <Text style={styles.text}>{item.date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text>{item.amount}</Text>
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
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  amountContainer: {
    backgroundColor: '#fff',
    width: 80,
    height: 50,
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
export default ExpenseItem;

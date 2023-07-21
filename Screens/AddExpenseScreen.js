import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AddExpenseScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Cancel" />
    </View>
  );
};

export default AddExpenseScreen;

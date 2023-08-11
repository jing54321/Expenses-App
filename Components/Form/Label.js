import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    paddingBottom: 4,
  },
});
export default Label;

import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormGroup = ({ children }) => {
  return <View style={styles.itemContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  itemContainer: {
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
});
export default FormGroup;

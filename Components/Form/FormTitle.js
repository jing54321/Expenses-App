import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../Constants/Colors';

const FormTitle = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: Colors.primary,
    marginBottom: 24,
    color: '#fff',
    fontWeight: 'bold',
    padding: 36,
  },
});
export default FormTitle;

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
    marginTop: 36,
    marginBottom: 42,
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
export default FormTitle;

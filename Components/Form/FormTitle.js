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
    margin: 24,
    color: '#000',
    fontWeight: 'bold',
  },
});
export default FormTitle;

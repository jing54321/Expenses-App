import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Label from './Label';

const Input = ({ label, isValid, textInputConfig }) => {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  styles.input.borderColor = isValid ? 'grey' : 'red';

  return (
    <>
      <Label>{label}</Label>
      <TextInput style={inputStyles} {...textInputConfig} />
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: 'grey',
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inputInvalid: {
    borderColor: 'red',
  },
});
export default Input;

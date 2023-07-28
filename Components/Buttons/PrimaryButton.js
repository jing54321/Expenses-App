import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../Constants/Colors';

const PrimaryButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? [styles.button, styles.pressed] : styles.button)} android_ripple={'#fff'}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.buttonPrimary,
    padding: 16,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default PrimaryButton;

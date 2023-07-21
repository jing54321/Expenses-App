import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const IconButton = ({ icon, color }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('AddExpense');
      }}
      style={({ pressed }) => (pressed ? [styles.button, styles.pressed] : styles.button)}
    >
      <Ionicons name={icon} size={32} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});
export default IconButton;

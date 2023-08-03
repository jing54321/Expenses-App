import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IconButton = ({ icon, color, size, onPress }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? [styles.button, styles.pressed] : styles.button)}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
export default IconButton;

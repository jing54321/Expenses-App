import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Container = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 0,
    paddingHorizontal: 24,
  },
});
export default Container;

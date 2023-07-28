import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView, View, StyleSheet, NativeModules, Platform } from 'react-native';
const { StatusBarManager } = NativeModules;
const FormContainer = ({ children }) => {
  // const [statusBarHeight, setStatusBarHeight] = useState(0);
  // useEffect(() => {
  //   Platform.OS == 'ios'
  //     ? StatusBarManager.getHeight(statusBarFrameData => {
  //         setStatusBarHeight(statusBarFrameData.height);
  //       })
  //     : null;
  // }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView onPress={Keyboard.dismiss} behavior={Platform.OS === 'android' ? 'padding' : 'position'}>
        <View style={styles.itemContainer}>{children}</View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'space-between',
    marginTop: 24,
  },
});
export default FormContainer;

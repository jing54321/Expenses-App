import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Container from '../Components/Container';
import FormGroup from '../Components/Form/FormGroup';
import FormContainer from '../Components/Form/FormContainer';
import Label from '../Components/Form/Label';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import SecondaryButton from '../Components/Buttons/SecondaryButton';

const ProfileScreen = ({ navigation }) => {
  const updateHandler = () => {};
  return (
    <Container>
      <FormContainer>
        <FormGroup>
          <Label>First Name</Label>
          <TextInput style={styles.input} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <TextInput style={styles.input} />
        </FormGroup>
        <FormGroup>
          <Label>ID</Label>
          <TextInput style={styles.input} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <TextInput secureTextEntry={true} style={styles.input} />
        </FormGroup>
        <FormGroup>
          <Label>Password Confirm</Label>
          <TextInput secureTextEntry={true} style={styles.input} />
        </FormGroup>
        <FormGroup>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 0.45 }}>
              <PrimaryButton onPress={updateHandler} title={'Update'} />
            </View>
            <View View style={{ flex: 0.45 }}>
              <SecondaryButton onPress={() => navigation.navigate('BottomNavigator')} title={'Cancel'} />
            </View>
          </View>
        </FormGroup>
      </FormContainer>
    </Container>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 54,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: 'grey',
    fontSize: 16,
    marginBottom: 12,
  },
  remove: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
export default ProfileScreen;

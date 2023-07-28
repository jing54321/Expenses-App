import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { addExpense } from '../Reducers/expense';
import { useDispatch } from 'react-redux';
import FormContainer from '../Components/Form/FormContainer';
import FormGroup from '../Components/Form/FormGroup';
import Label from '../Components/Form/Label';
import Date from '../Components/Form/Date';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import SecondaryButton from '../Components/Buttons/SecondaryButton';
import moment from 'moment/moment';

const AddExpenseScreen = ({ navigation }) => {
  const [description, setDescription] = useState(' ');
  const [amount, setAmount] = useState(' ');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const dispatch = useDispatch();

  const changeDescHandler = enteredText => {
    setDescription(enteredText);
  };
  const changeAmountHandler = enteredText => {
    setAmount(enteredText);
  };

  const submitHandler = () => {
    dispatch(addExpense({ id: Math.random() * 17 + 11, description: description, amount: amount, date: date }));
    navigation.goBack();
  };

  return (
    <>
      {/* <FormTitle>Expense</FormTitle> */}
      <FormContainer>
        <FormGroup>
          <Label>Description</Label>
          <TextInput style={styles.input} onChangeText={changeDescHandler} value={description} />
        </FormGroup>
        <FormGroup>
          <Label>Amount</Label>
          <TextInput style={styles.input} onChangeText={changeAmountHandler} value={amount} keyboardType="decimal-pad" />
        </FormGroup>
        <FormGroup>
          <Label>Date</Label>
          <Date setDate={setDate} date={date} />
        </FormGroup>
        <FormGroup>
          <PrimaryButton onPress={submitHandler} title={'Submit'} />
        </FormGroup>
        <FormGroup>
          <SecondaryButton onPress={() => navigation.goBack()} title="Cancel" />
        </FormGroup>
      </FormContainer>
    </>
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
  },
});

export default AddExpenseScreen;

import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { addExpense, resetExpense } from '../Reducers/expense';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../Components/Form/FormContainer';
import FormGroup from '../Components/Form/FormGroup';
import Label from '../Components/Form/Label';
import Date from '../Components/Form/Date';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import SecondaryButton from '../Components/Buttons/SecondaryButton';
import moment from 'moment/moment';
import Spinner from 'react-native-loading-spinner-overlay';
import Input from '../Components/Form/Input';
import FormTitle from '../Components/Form/FormTitle';

const AddExpenseScreen = ({ navigation }) => {
  const [description, setDescription] = useState(' ');
  const [amount, setAmount] = useState(' ');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const { loading, success } = useSelector(state => state.expenseItems);
  const dispatch = useDispatch();

  const changeDescHandler = enteredText => {
    setDescription(enteredText);
  };
  const changeAmountHandler = enteredText => {
    setAmount(enteredText);
  };

  const submitHandler = () => {
    dispatch(addExpense({ id: Math.random() * 17 + 11, description: description, amount: amount, date: date }));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetExpense());
      navigation.goBack();
    }
  }, [navigation, success, dispatch]);

  return (
    <FormContainer>
      <FormTitle>Your Expense</FormTitle>
      <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />
      <FormGroup>
        <View style={styles.AmountDateBox}>
          <View style={{ flex: 0.5 }}>
            <Input
              label={'Amount'}
              textInputConfig={{
                onChangeText: changeAmountHandler,
                value: amount,
                keyboardType: 'decimal-pad',
              }}
            />
          </View>
          <View style={{ flex: 0.5 }}>
            <Date setDate={setDate} date={date} label={'Date'} />
          </View>
        </View>
      </FormGroup>

      <FormGroup>
        <Input
          label={'Description'}
          textInputConfig={{
            onChangeText: changeDescHandler,
            value: description,
            keyboardType: 'default',
            autoCapitalize: 'words',
            multiline: true,
            numberOfLines: 2,
            //autoCorrect: false, //default is true
          }}
        />
      </FormGroup>
      <FormGroup>
        <PrimaryButton onPress={submitHandler} title={'Submit'} />
      </FormGroup>
      <FormGroup>
        <SecondaryButton onPress={() => navigation.goBack()} title="Cancel" />
      </FormGroup>
    </FormContainer>
  );
};
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#fff',
  },
  input: {
    height: 54,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: 'grey',
    fontSize: 16,
  },
  AmountDateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
});

export default AddExpenseScreen;

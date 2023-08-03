import { useEffect, useState } from 'react';
import { StyleSheet, Pressable, TextInput, View } from 'react-native';
import { updateExpense, resetExpense } from '../Reducers/expense';
import { removeExpense } from '../Reducers/expense';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../Components/Form/FormContainer';
import FormGroup from '../Components/Form/FormGroup';
import Label from '../Components/Form/Label';
import Date from '../Components/Form/Date';
import IconButton from '../Components/Buttons/IconButton';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import SecondaryButton from '../Components/Buttons/SecondaryButton';
import Spinner from 'react-native-loading-spinner-overlay';

const EditExpenseScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [description, setDescription] = useState(item.description);
  const [amount, setAmount] = useState(item.amount);
  const [date, setDate] = useState(item.date);
  const { loading, success } = useSelector(state => state.expenseItems);

  const changeDescHandler = enteredText => {
    setDescription(enteredText);
  };
  const changeAmountHandler = enteredText => {
    setAmount(enteredText);
  };

  const dispatch = useDispatch();

  const updateHandler = () => {
    dispatch(updateExpense({ id: item.id, description: description, amount: amount, date: date }));
  };
  const deleteHandler = () => {
    dispatch(removeExpense({ id: item.id }));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetExpense());
      navigation.goBack();
    }
  }, [dispatch, navigation, success]);

  return (
    <FormContainer>
      <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 0.45 }}>
            <PrimaryButton onPress={updateHandler} title={'Update'} />
          </View>
          <View View style={{ flex: 0.45 }}>
            <SecondaryButton onPress={() => navigation.goBack()} title={'Cancel'} />
          </View>
        </View>
      </FormGroup>
      <FormGroup>
        <Pressable android_ripple={'#fff'} style={({ pressed }) => (pressed ? [styles.remove, styles.pressed] : styles.remove)}>
          <IconButton color={'red'} onPress={deleteHandler} icon={'trash-outline'} size={32} />
        </Pressable>
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
  remove: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default EditExpenseScreen;

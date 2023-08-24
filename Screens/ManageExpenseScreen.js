import { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Pressable, Alert, Text } from 'react-native';
import { addExpense, resetExpense, updateExpense, removeExpense } from '../Reducers/expense';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../Components/Form/FormContainer';
import FormGroup from '../Components/Form/FormGroup';
import Date from '../Components/Form/Date';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import SecondaryButton from '../Components/Buttons/SecondaryButton';
import moment from 'moment/moment';
import Spinner from 'react-native-loading-spinner-overlay';
import Input from '../Components/Form/Input';
import FormTitle from '../Components/Form/FormTitle';
import IconButton from '../Components/Buttons/IconButton';
/**
 * This component is to add a new expense item or update existing item's info.
 */
const ManageExpenseScreen = ({ navigation, route }) => {
  const item = route.params?.item;
  const isEditable = !!item;
  const [inputs, setInputs] = useState({
    description: {
      value: isEditable ? item.description : '',
      isValid: true,
    },
    amount: {
      value: isEditable ? item.amount : '',
      isValid: true,
    },
  });
  const [date, setDate] = useState(isEditable ? item.date : moment().format('YYYY-MM-DD'));
  const { loading, success, error } = useSelector(state => state.expenseItems);
  const dispatch = useDispatch();

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  };

  const checkValid = () => {
    const amountIsValid = !isNaN(inputs.amount.value) && inputs.amount.value > 0;
    const descIsValid = inputs.description.value.trim().length > 0;
    if (!amountIsValid || !descIsValid) {
      //Alert.alert('Invalid input', 'Please check your input values');
      setInputs(currentInputs => {
        return {
          amount: {
            value: currentInputs.amount.value,
            isValid: amountIsValid,
          },
          description: {
            value: currentInputs.description.value,
            isValid: descIsValid,
          },
        };
      });
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = () => {
    if (!checkValid()) return;
    dispatch(
      addExpense({
        description: inputs.description.value,
        amount: inputs.amount.value,
        date: date,
      })
    );
  };

  const updateHandler = () => {
    if (!checkValid()) return;
    dispatch(
      updateExpense({
        id: item.id,
        description: inputs.description.value,
        amount: inputs.amount.value,
        date: date,
      })
    );
  };

  const deleteHandler = () => {
    dispatch(removeExpense({ id: item.id }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditable ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditable, navigation]);

  useEffect(() => {
    if (success) {
      dispatch(resetExpense());
      navigation.goBack();
    }
  }, [navigation, success, dispatch]);

  return (
    <FormContainer>
      <FormTitle>Your Expense</FormTitle>
      {error && Alert.alert('Connection Error', 'Could not connect to server', [{ text: 'OK', onPress: () => dispatch(resetExpense()) }])}
      <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />
      <FormGroup>
        <View style={styles.AmountDateBox}>
          <View style={{ flex: 0.5 }}>
            <Input
              label={'Amount'}
              isValid={inputs.amount.isValid}
              textInputConfig={{
                onChangeText: inputChangedHandler.bind(this, 'amount'),
                value: inputs.amount.value,
                keyboardType: 'decimal-pad',
              }}
            />
            {!inputs.amount.isValid ? <Text style={{ color: 'red' }}>Invalid inputs</Text> : <Text></Text>}
          </View>
          <View style={{ flex: 0.5 }}>
            <Date setDate={setDate} date={date} label={'Date'} />
            <View>
              <Text></Text>
            </View>
          </View>
        </View>
      </FormGroup>

      <FormGroup>
        <View>
          <Input
            label={'Description'}
            isValid={inputs.description.isValid}
            textInputConfig={{
              onChangeText: inputChangedHandler.bind(this, 'description'),
              value: inputs.description.value,
              keyboardType: 'default',
              autoCapitalize: 'words',
              multiline: true,
              numberOfLines: 2,
              borderColor: inputs.description.isValid ? 'grey' : 'red',
              //autoCorrect: false, //default is true
            }}
          />
          {!inputs.description.isValid ? <Text style={{ color: 'red' }}>Invalid inputs</Text> : <Text></Text>}
        </View>
      </FormGroup>
      <FormGroup>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8, paddingTop: 8 }}>
          <View style={{ flex: 0.5 }}>
            <PrimaryButton onPress={isEditable ? updateHandler : submitHandler} title={isEditable ? 'Update' : 'submit'} />
          </View>
          <View View style={{ flex: 0.5 }}>
            <SecondaryButton onPress={() => navigation.goBack()} title={'Cancel'} />
          </View>
        </View>
      </FormGroup>

      {isEditable && (
        <FormGroup>
          <Pressable android_ripple={'#fff'} style={({ pressed }) => (pressed ? [styles.remove, styles.pressed] : styles.remove)}>
            <IconButton color={'red'} onPress={deleteHandler} icon={'trash-outline'} size={32} />
          </Pressable>
        </FormGroup>
      )}
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
  remove: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ManageExpenseScreen;

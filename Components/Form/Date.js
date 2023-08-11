import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import Label from './Label';

const Date = ({ date, setDate, label }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const isValidDate = selectedDate => {
    return moment().diff(moment(selectedDate, 'YYYY-MM-DD'), 'day') > 0;
  };

  const showAlert = () =>
    Alert.alert('Wrong Date', 'Future date cannot be selected', [
      {
        text: 'Okay',
        onPress: () => hideDatePicker(),
        style: 'cancel',
      },
    ]);
  const handleConfirm = date => {
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate();
    // const temp = `${year}-${month}-${day}`;

    if (!isValidDate(date)) {
      return showAlert();
    }

    const finalDate = moment(date).format('YYYY-MM-DD');
    setDate(finalDate);
    hideDatePicker();
  };

  return (
    <>
      <Label>{label}</Label>
      <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      <Pressable onPress={showDatePicker} style={[styles.input, { flex: 1 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>{date}</Text>
          <MaterialIcons name="arrow-drop-down" size={32} color="black" />
        </View>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: 'grey',
    fontSize: 16,
  },
});
export default Date;

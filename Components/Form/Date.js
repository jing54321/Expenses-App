import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

const Date = ({ date, setDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate();
    // const temp = `${year}-${month}-${day}`;
    const finalDate = moment(date).format('YYYY-MM-DD');
    setDate(finalDate);
    hideDatePicker();
  };

  return (
    <>
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
    height: 54,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: 'grey',
    fontSize: 16,
  },
});
export default Date;

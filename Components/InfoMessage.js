import { Text, View } from 'react-native';

const InfoMessage = ({ children }) => {
  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 16 }}>{children}</Text>
    </View>
  );
};

export default InfoMessage;

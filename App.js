import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import RecentExpensesScreen from './Screens/RecentExpensesScreen';
import IconButton from './Components/IconButton';
import Colors from './Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AddExpenseScreen from './Screens/AddExpenseScreen';
import { Provider } from 'react-redux';
import { store } from './Store';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: Colors.primary },
          tabBarStyle: { backgroundColor: Colors.secondary, paddingTop: 8 },
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: '#cccccc',
          headerRight: () => <IconButton icon={'add'} color={'#000'} />,
        }}
      >
        <Tab.Screen
          name="RecentExpenses"
          component={RecentExpensesScreen}
          options={{
            title: 'Recent Expenses',
            tabBarIcon: ({ color, size }) => <Ionicons name="timer" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'All Expenses',
            tabBarIcon: ({ color, size }) => <Ionicons name="wallet" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="AddExpense"
              component={AddExpenseScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

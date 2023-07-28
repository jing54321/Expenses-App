import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import RecentExpensesScreen from './Screens/RecentExpensesScreen';
import AddExpenseScreen from './Screens/AddExpenseScreen';
import EditExpenseScreen from './Screens/EditExpenseScreen';
import AddButton from './Components/Buttons/AddButton';
import Colors from './Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
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
          headerRight: () => <AddButton icon={'add'} color={'#000'} />,
        }}
      >
        <Tab.Screen
          name="RecentExpenses"
          component={RecentExpensesScreen}
          options={{
            title: 'Recent Expense',
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All',
            tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        >
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
            <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} />
            <Stack.Screen name="EditExpense" component={EditExpenseScreen} options={{ title: 'Edit Expense' }} />
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

import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import RecentExpensesScreen from './Screens/RecentExpensesScreen';
import ManageExpenseScreen from './Screens/ManageExpenseScreen';
// import AddExpenseScreen from './Screens/AddExpenseScreen';
// import EditExpenseScreen from './Screens/EditExpenseScreen';
import ProfileScreen from './Screens/ProfileScreen';
import IconButton from './Components/Buttons/IconButton';
import Colors from './Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
let title = 'All expenses';

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
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="RecentExpenses"
          component={RecentExpensesScreen}
          options={{
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              title = 'Recent expenses';
            },
          })}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'All',
            tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              title = 'All Expenses';
            },
          })}
        />
      </Tab.Navigator>
    );
  };
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="BottomNavigator"
        screenOptions={({ navigation, route }) => ({
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          drawerStyle: {
            backgroundColor: '#fff',
          },

          headerRight: ({ tintColor }) => (
            <IconButton
              icon={'add'}
              color={tintColor}
              size={32}
              onPress={() => {
                navigation.navigate('ManageExpense');
              }}
            />
          ),
        })}
      >
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerLabel: 'Edit Profile',
            title: 'Edit Profile',
            drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={({ route }) => ({
            title: title,
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          })}
        />
      </Drawer.Navigator>
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
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
            {/* <Stack.Screen name="EditExpense" component={EditExpenseScreen} options={{ title: 'Edit Expense' }} /> */}
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

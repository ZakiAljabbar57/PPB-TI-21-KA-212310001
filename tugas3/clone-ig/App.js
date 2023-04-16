import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/Screens/Home';
import Search from './src/Screens/Search';

const homeName = 'Home';
const searchName = 'Search';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black'
          }
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
    // <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

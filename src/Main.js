import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import useAuth from './contexts/AuthContext';

import { useEffect } from 'react';
import Auth from './screens/Auth';
import {Home} from './screens/Home';
import auth from '@react-native-firebase/auth';
import Activities from './screens/Activities';
import Schedules from './screens/Schedules';
import Profile from './screens/Profile';

const TabsScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F5FCEE',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Tabs.Screen name="Activities" component={Activities} options={{title: 'Activities'}}/>
      <Tabs.Screen name="Schedules" component={Schedules} options={{title: 'Schedules'}}/>
      <Tabs.Screen name="Profle" component={Profile} options={{title: 'Profile'}}/>


      {/* <Tabs.Screen name="B" component={ScreenB} /> */}
    </Tabs.Navigator>
  );
};

export default function Routes() {
  const {isAuthenticated, setUser} = useAuth();
  const AuthStack = createStackNavigator();
  const MainStack = createStackNavigator();

  async function handleUserEvents(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onIdTokenChanged(handleUserEvents);
    return subscriber;
  }, []);

  return isAuthenticated ? (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="TabsScreen" component={TabsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Auth" component={Auth} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

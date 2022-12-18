import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import useAuth from './contexts/AuthContext';

import {Home}from './screens/Home';
import Auth from './screens/Auth';
import Activities from './screens/Activities';
import Schedules from './screens/Schedules';

const TabsScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="A"
      // screenOptions={{ headerShown: false }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Tabs.Screen name="Activities" component={Activities} options={{title: 'Activities'}}/>
      <Tabs.Screen name="Schedules" component={Schedules} options={{title: 'Schedules'}}/>

    </Tabs.Navigator>
  );
};

export default function Routes() {
  const {isAuthenticated} = useAuth();
  const AuthStack = createStackNavigator();
  const MainStack = createStackNavigator();

  return true ? (
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

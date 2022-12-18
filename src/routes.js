import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import useAuth from './contexts/AuthContext';

import ScreenA from './screens/ScreenA';
import Auth from './screens/Auth';
import { Home } from './screens/Home';


const TabsScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
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
      <Tabs.Screen name="Home" component={Home} options={{title: 'My home'}} />
      {/* <Tabs.Screen name="B" component={ScreenB} /> */}
    </Tabs.Navigator>
  );
};

export default function Routes() {
  const {isAuthenticated} = useAuth();
  const AuthStack = createStackNavigator();
  const MainStack = createStackNavigator();

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

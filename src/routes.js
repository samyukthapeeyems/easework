import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import useAuth from './contexts/AuthContext';

import {ScreenA, ScreenB, ScreenC} from './screens';


const TabsScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Menu"
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
      <Tabs.Screen name="A" component={ScreenA} options={{title: 'My home'}} />
      <Tabs.Screen name="B" component={ScreenB} />
      <Tabs.Screen name="C" component={ScreenC} />
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

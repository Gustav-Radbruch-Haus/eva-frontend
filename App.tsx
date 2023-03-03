import { StyleSheet, Text, View } from 'react-native';
import { store } from './store';
import { Provider } from 'react-redux';
import SplashScreen from "./screens/SplashScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {MainNavigator} from "./navigation/MainNavigator";
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "./navigation/AuthStackNavigator";
import {useAppSelector} from "./hooks/reduxHooks";

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator initialRouteName="Splash"
                           screenOptions={{
              headerShown: false,
          }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Auth" component={AuthStackNavigator} />
              <Stack.Screen name="Main" component={MainNavigator} />
              {/* Add your other screens here */}
          </Stack.Navigator>
      </Provider>
      </NavigationContainer>
  );
};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";


type AuthStackParamList = {};

const AuthStack = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <AuthStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />

        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
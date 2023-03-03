import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Test from "../screens/Test";
import Test2 from "../screens/Test2";


type HomeStackParamList = {};

const HomeStack = createStackNavigator();

const HomeStackNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="TestScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen
                name="TestScreen"
                component={Test}
            />
            <HomeStack.Screen
                name="Test2Screen"
                component={Test2}
            />

        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Test from "../screens/Test";
import Test2 from "../screens/Test2";
import DormStatus from "../screens/DormStatus";


type DormStatusStackParamList = {};

const DormStatusStack = createStackNavigator();

const DormStatusStackNavigator: React.FC = () => {
    return (
        <DormStatusStack.Navigator
            initialRouteName="DormStatusScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <DormStatusStack.Screen
                name="DormStatusScreen"
                component={DormStatus}
            />
        </DormStatusStack.Navigator>
    );
};

export default DormStatusStackNavigator;
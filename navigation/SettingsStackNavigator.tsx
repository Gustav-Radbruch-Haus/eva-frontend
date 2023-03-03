import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../screens/settings/Settings';
import ProfileSettings from "../screens/settings/ProfileSettings";

const SettingsStack = createStackNavigator();

export const SettingsStackNavigator: React.FC = () => {
    return (
        <SettingsStack.Navigator
            initialRouteName="SettingsMain"
            screenOptions={{
                headerShown: false,
            }}
        >
            <SettingsStack.Screen name="SettingsMain" component={Settings} />
            <SettingsStack.Screen
                name="ProfileSettings"
                component={ProfileSettings}
            />
        </SettingsStack.Navigator>
    );
};

export default SettingsStackNavigator;
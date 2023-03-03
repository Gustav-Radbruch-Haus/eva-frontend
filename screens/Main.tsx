import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, useColorScheme} from 'react-native';
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
} from '@react-navigation/native';
import {MainNavigator} from "../navigation/MainNavigator";
import { StatusBar } from 'expo-status-bar';
import HomeStackNavigator from "../navigation/HomeStackNavigator";
import SettingsStackNavigator from "../navigation/SettingsStackNavigator";
import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileSettings from "./settings/ProfileSettings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {setDarkTheme, setLightTheme} from "../hooks/themeSlice";

const Tab = createBottomTabNavigator();

const Main = () => {

    const { theme } = useAppSelector((state) => state.theme);
    const colorScheme = useColorScheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const setColorScheme = async () => {
            const storedScheme = await AsyncStorage.getItem('colorScheme');
            if (!storedScheme) {
                await AsyncStorage.setItem('colorScheme', colorScheme);
                dispatch(colorScheme === 'dark' ? setDarkTheme() : setLightTheme());
            } else {
                dispatch(storedScheme === 'dark' ? setDarkTheme() : setLightTheme());
            }
        };
        setColorScheme();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.text}>Welcome to the Home Screen</Text>
                </View>
            </SafeAreaView>

            <StatusBar />
            <NavigationContainer theme={theme.dark ? DarkTheme : DefaultTheme}>
                <MainNavigator />
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'center',

    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;
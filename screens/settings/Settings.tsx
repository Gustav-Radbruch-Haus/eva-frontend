import React from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from "@react-navigation/stack";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useNavigation} from "@react-navigation/native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Constants from "expo-constants";
import {SIZE} from "../../utils/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setDarkTheme, setLightTheme} from "../../hooks/themeSlice";
import AuthService from "../../services/AuthService";

const Settings = () => {

    const navigation = useNavigation<StackNavigationProp<any>>();
    const { theme } = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
                    PREFERENCES
                </Text>
                <View
                    style={[
                        styles.sectionItem,
                        { backgroundColor: theme.colors.background2 },
                    ]}
                >
                    <View style={styles.sectionItemLeft}>
                        <Feather
                            name={theme.dark ? 'moon' : 'sun'}
                            size={24}
                            color={theme.colors.primary}
                        />
                    </View>
                    <View style={styles.sectionItemCenter}>
                        <Text
                            style={[styles.sectionItemText, { color: theme.colors.primary }]}
                        >
                            Dark Mode
                        </Text>
                    </View>
                    <View style={styles.sectionItemRight}>
                        <Switch
                            value={theme.dark}
                            trackColor={{
                                false: theme.colors.switchFalse,
                                true: 'tomato',
                            }}
                            thumbColor={theme.colors.switchThumb}
                            onChange={async () => {
                                if (theme.dark) {
                                    dispatch(setLightTheme());
                                    await AsyncStorage.setItem('colorScheme', 'light');
                                } else {
                                    dispatch(setDarkTheme());
                                    await AsyncStorage.setItem('colorScheme', 'dark');
                                }
                            }}
                        />
                    </View>
                </View>
                {/* Account/Profile Prefs */}
                <View
                    style={[
                        styles.sectionItem,
                        { backgroundColor: theme.colors.background2 },
                    ]}
                >
                    <View style={styles.sectionItemLeft}>
                        <Feather
                            name='user'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </View>
                    <View style={styles.sectionItemCenter}>
                        <Text
                            style={[styles.sectionItemText, { color: theme.colors.primary }]}
                        >
                            Profile
                        </Text>
                    </View>
                    <View style={styles.sectionItemRight}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProfileSettings');
                            }}
                        >
                            <Feather
                                name={'chevron-right'}
                                size={24}
                                color={theme.colors.primary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            {/* Account/Profile Prefs */}
            <TouchableOpacity
                onPress={() => {
                    AuthService.logout().then(() => {
                        navigation.navigate('Auth');
                    });
                }}
            >
            <View
                style={[
                    styles.sectionItem,
                    { backgroundColor: theme.colors.background2 },
                ]}
            >

                <View style={styles.sectionItemLeft}>
                    <Feather
                        name='log-out'
                        size={24}
                        color={theme.colors.primary}
                    />
                </View>
                <View style={styles.sectionItemCenter}>
                    <Text
                        style={[styles.sectionItemText, { color: theme.colors.primary }]}
                    >
                        Log out
                    </Text>
                </View>
                <View style={styles.sectionItemRight}>

                </View>

            </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    section: {
        width: SIZE,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontFamily: 'Arial',
        fontSize: 16,
    },
    sectionItem: {
        display: 'flex',
        flexDirection: 'row',
        height: 45,
    },
    sectionItemText: {
        fontFamily: 'Arial',
    },
    sectionItemLeft: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionItemCenter: {
        width: '60%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    sectionItemRight: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Settings;
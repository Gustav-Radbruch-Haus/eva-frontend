import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useAppSelector} from "../hooks/reduxHooks";
import {LinearGradient} from 'expo-linear-gradient';

import {ListItem} from '@rneui/themed';

const rooms = [
    {name: 'Tea', status: 'locked', info: 'Geschlossen'},
    {name: 'Bar', status: 'open', info: 'Superbowl Event - 22:00'},
    {name: 'Atrium', status: 'locked', info: 'Geschlossen'},
    {name: 'Fitness Room', status: 'occupied', info: '3 Personen'},
    {name: 'Sporthall', status: 'locked', info: 'Geschlossen'},
    {name: 'Music', status: 'occupied', info: 'Belegt'},
];

const Room = ({room}) => {
    let statusColors;
    if (room.status === 'open') {
        statusColors = ['#8fa88f', '#00c400'];
    } else if (room.status === 'occupied') {
        statusColors = ['#b0b08f', '#d5d501'];
    } else if (room.status === 'locked') {
        statusColors = ['#b28c8c', '#cc0000'];
    } else {
        statusColors = ['#afaeae', '#444444'];
    }
    return (
        <View style={{width: '100%'}}>
            <ListItem
                linearGradientProps={{
                    colors: statusColors,
                    start: {x: 1, y: 0},
                    end: {x: 0.1, y: 0},
                }}

                ViewComponent={LinearGradient} // Only if no expo
            >
                <ListItem.Content>
                    <ListItem.Title style={{color: 'white', fontWeight: 'bold'}}>
                        {room.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'white'}}>
                        {room.info}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="white"/>
            </ListItem>
        </View>
    );
};

const DormStatus = () => {

    const navigation = useNavigation();
    const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 49 : StatusBar.currentHeight;

    const {theme} = useAppSelector((state) => state.theme);
    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <View style={{height: STATUS_BAR_HEIGHT, backgroundColor: "#000"}}>
                <StatusBar
                    translucent
                    backgroundColor="#000"
                    barStyle="light-content"
                />
            </View>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Status der Räume</Text>
                </View>
                <SafeAreaView>
                    <View style={styles.roomContainer}>
                        {rooms.map((room, index) => (
                            <Room room={room}/>
                        ))}
                    </View>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'center',

    },
    roomContainer: {
        width: '100%',
        alignItems: 'center',
    },
    statusBadge: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
    },
    roomName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

export default DormStatus;
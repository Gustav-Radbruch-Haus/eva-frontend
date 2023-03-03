import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useAppSelector} from "../hooks/reduxHooks";

const Test = () => {

    const { theme } = useAppSelector((state) => state.theme);
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Welcome to the Test Screen</Text>
            <Button title="Go to Test2Screen" onPress={() => navigation.navigate('Test2Screen')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Test;
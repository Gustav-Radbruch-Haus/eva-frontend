import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Test2 Screen</Text>
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

export default Test2;
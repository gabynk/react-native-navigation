import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class CreateChat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>CreateChat</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 30
    }
})
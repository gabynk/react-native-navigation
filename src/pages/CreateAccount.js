import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CreateAccount extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>CreateAccount</Text>
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
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Chat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Chat</Text>
                <Button title="New chat" onPress={() => this.props.navigation.push('CreateChat')} />
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
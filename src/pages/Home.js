import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home</Text>
                <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
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

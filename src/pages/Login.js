import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>

                <View>
                    <Button 
                        title="Home" 
                        color="#900"
                        onPress={() => this.props.navigation.navigate('HomeTabs')} 
                    />
                    <Button 
                        title="Create account" 
                        onPress={() => this.props.navigation.navigate('CreateAccount')} 
                    />
                </View>
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
        fontSize: 30,
        margin: 15
    },
})
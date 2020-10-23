import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import HomeTabs from './HomeTabs';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

import Header from '../components/Header';

export default function LoginStack() {
    return (
        <NavigationContainer>
            <Navigator 
                initialRouteName="Login"
                screenOptions={{ 
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: '#F1B8FF'
                    } 
                }}
            >
                <Screen 
                    name="HomeTabs" 
                    component={HomeTabs} 
                />
                <Screen 
                    name="Login" 
                    component={Login} 
                />
                <Screen 
                    name="CreateAccount" 
                    component={CreateAccount} 
                    options={{
                        headerShown: true,
                        header: () => <Header title="New account" back={true} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}
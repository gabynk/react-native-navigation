import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Chat from '../pages/Chat';
import CreateChat from '../pages/CreateChat';

import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const ChatStack = createStackNavigator();

function ChatStackScreen() {
    return (
        <ChatStack.Navigator 
            initialRouteName="Chat" >
            <ChatStack.Screen 
                name="Chat" 
                component={Chat} 
                options={{
                    tabBarLabel: 'Chat',
                    headerShown: true,
                    header: () => <Header title="My chats" />
                }} 
            />
            <ChatStack.Screen 
                name="CreateChat" 
                component={CreateChat} 
                options={{
                    tabBarLabel: 'Chat',
                    headerShown: true,
                    header: () => <Header title="Create your chat" close={true} />
                }}
            />
        </ChatStack.Navigator>
    )
}

export default function HomeTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 51,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 16,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#F4E8FF',
                activeBackgroundColor: '#FF9AC7',
                inactiveTintColor: '#3C3C3C',
                activeTintColor: '#000C18'
            }}
            screenOptions={{ 
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                }}    
            />
            <Tab.Screen 
                name='Chat' 
                component={ChatStackScreen}
                options={{
                    tabBarLabel: 'Chat',
                }}  
            />
        </Tab.Navigator>
    );
}



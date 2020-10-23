import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {props.back ? (
                <TouchableOpacity onPress={navigation.goBack}>
                    <MaterialIcons name="arrow-left" size={30} color="#900" />
                </TouchableOpacity>
            ) : (
                <View />
            )}

            <Text style={styles.title}>{props.title}</Text>

            {props.close ? (
                <TouchableOpacity onPress={navigation.goBack}>
                    <MaterialIcons name="close" size={30} color="#900" />
                </TouchableOpacity>
            ) : (
                <View />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#FFE2F5',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
        paddingTop: 20,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        color: '#4F2A36',
        fontWeight: 'bold',
        fontSize: 20
    }
})
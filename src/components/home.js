import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../images/logo.png';


export default class App1 extends React.Component {
    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: '#ffffff',
            color: '#000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is APpp2</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
        borderWidth: 1,
        padding: 20,
    },
});

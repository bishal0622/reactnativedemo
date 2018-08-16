import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../images/logo.png';


export default class Welcome extends Component {

    static navigationOptions = {
        header: null,

    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2, justifyContent: 'center'}}>
                    <Image source={Logo}
                           resizeMode={Image.resizeMode.center}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Home')
                        }}
                        title="WELCOME"
                        color="#000"
                        style={styles.buttonContainer}
                    />

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: 'black'
    },
});

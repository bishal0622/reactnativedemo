import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput, Button, TouchableHighlight} from 'react-native';

export default class HelloWorldComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isHidden: true
        }
    }

    toggle(){
        this.setState({
            isHidden: !this.state.isHidden
        });
        console.log(this.state.isHidden);
    }

    render() {
        let pic = {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiycrjwG0WjWXjgNGLhVPt8raT3-fsD31_9HoaXaO3Lgb_Umu'
        };
        return (
            <View style={styles.container}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={pic} style={styles.images}/>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <GreetingsComponent name='WELCOME'/>
                        <GreetingsComponent name='TO'/>
                        <GreetingsComponent name='MY APP'/>
                    </View>
                    <View style={{flex: 2,alignItems:'center'}}>
                        <InputComponent></InputComponent>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.toggle()
                        }}
                        style={{marginRight:40,
                            marginLeft:40,
                            marginTop:10,
                            paddingTop:20,
                            paddingBottom:20,
                            backgroundColor:'#68a0cf',
                            borderWidth: 1,
                            borderColor: '#fff'}}
                    >
                        <Text  style={{color:'#fff',
                            textAlign:'center'}}>
                            {this.state.isHidden.toString().toUpperCase()}
                        </Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}


class GreetingsComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {isShowingText: true};
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.name : ' ';

        if (display == 'MY APP') {
            return (
                <Text style={styles.bigYellow}>{display}</Text>
            );
        } else {
            return (
                <Text>{display}</Text>
            );
        }
    }
}

class InputComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            text: ''
        }
    }

    getText(data) {
        this.setState({
            text: data
        })
    }

    render() {
        return (
            <View style={{padding: 10,width:200}}>
                <TextInput
                    style={{height: 40, justifyContent: 'center',backgroundColor:'white',marginBottom:15,textAlign:'center'}}
                    placeholder="Type here!"
                    onChangeText={(text) => this.getText(text)}
                />
                <Text style={{padding: 10, backgroundColor: 'grey',color:'white',textAlign:'center'}}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    images: {
        width: 193,
        height: 200
    },
    bigYellow: {
        fontWeight: 'bold',
        fontSize: 30,
    },

});


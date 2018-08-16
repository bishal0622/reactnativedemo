import React, {Component} from 'react';
import RootStack from './components/router';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RootStack/>
        );
    }

}
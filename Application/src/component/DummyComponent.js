import React from 'react';
import {View,Text} from 'react-native';

class DummyComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.navigation.navigate("Main");
    }

    render(){
        return(
            <View>
            </View>
        )
    }
}

export default DummyComponent;
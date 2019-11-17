import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import ActionCreator from '../action/Index';

class LogoutComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.Logout();
        this.props.navigation.navigate("Open");
    }

    render(){
        return(
            <View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        user : state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        Logout:()=>{
            dispatch(ActionCreator.Logout());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogoutComponent);
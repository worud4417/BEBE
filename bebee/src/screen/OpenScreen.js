import React,{Component}  from 'react';
import {View,Text,Image} from 'react-native';
import {Button} from 'react-native-elements';

import color from '../resource/Color';

class OpenScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:3,margin:"20%"}}>
                    <Image source={require("../../assets/bebeicon.png")} style={{width:"100%",height:"100%"}}></Image>
                </View>
                <View style={{flex:2}}>
                    <Button buttonStyle={{borderRadius:10,width:"70%",alignSelf:"center",backgroundColor:color.mainColor}} title="들어가기" onPress={()=>this.props.navigation.navigate("Login")}></Button>
                </View>
            </View>
        )
    }
}

export default OpenScreen
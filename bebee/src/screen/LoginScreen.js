import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchLogin} from '../api/LoginApi';
import color from '../resource/Color';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    async _onSubmit(){  
        let result = await fetchLogin(this.state.email,this.state.password);
        if(result.status == 1){
            this.props.navigation.navigate("Main");
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:color.mainColor,justifyContent:"center"}}>
                    <Text style={{color:"white",fontSize:25,alignSelf:"center"}}>REGISTER</Text>
                </View>
                <View style={{flex:7}}>
                    <View style={{justifyContent:"center",flex:1}}>
                        <Text style={{color:color.mainColor,alignSelf:"center"}}>처음이신가요?</Text>
                        <Text style={{color:color.mainColor,alignSelf:"center"}}>BEBEBLOCK에 가입해보세요.</Text>
                    </View>
                    <View style={{flex:3,marginHorizontal:"10%",justifyContent:"center"}}>
                        <Text style={{color:color.mainColor}}>E M A I L</Text>
                        <Input containerStyle={{marginBottom:"5%"}} rightIcon={<Icon name="ios-mail" color="gray" size={30}></Icon>} onChangeText={(text)=>this.setState({email:text})}></Input>
                        <Text style={{color:color.mainColor}}>P A S S W O R D</Text>
                        <Input rightIcon={<Icon name="ios-key" color="gray" size={30}></Icon>} onChangeText={(text)=>this.setState({password:text})}></Input>
                    </View>
                    <View style={{flex:4,justifyContent:"center"}}>
                        <Button buttonStyle={styles.login} titleStyle={{color:"white",alignSelf:"center"}} title="로그인" onPress={()=>this._onSubmit()}></Button>
                        <Button buttonStyle={styles.normalJoin} titleStyle={{color:"white",alignSelf:"center"}} title="회원가입" onPress={()=>this.props.navigation.navigate("Join")}></Button>
                        <Text style={{color:color.mainColor,alignSelf:"center",fontWeight:"bold",fontSize:20,marginVertical:"2%"}}>OR</Text>
                        <Button buttonStyle={styles.facebookJoin} titleStyle={{color:"white",alignSelf:"center"}} title="Facebook 계정으로 회원가입"></Button>
                        <Button buttonStyle={styles.googleJoin} titleStyle={{color:"black",alignSelf:"center"}} title="Google 계정으로 회원가입"></Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login:{
        borderRadius:20,
        backgroundColor:color.mainColor,
        marginHorizontal:"10%",
        justifyContent:"center",
        marginBottom:"2%"
    },
    normalJoin:{
        borderRadius:20,
        backgroundColor:color.mainColor,
        marginHorizontal:"10%",
        justifyContent:"center"
    },
    facebookJoin:{
        borderRadius:20,
        backgroundColor:color.facebookColor,
        marginHorizontal:"10%",
        marginBottom:"3%",
        justifyContent:"center"
    },
    googleJoin:{
        borderRadius:20,
        backgroundColor:"white",
        marginHorizontal:"10%",
        borderColor:"gray",
        borderWidth:1,
        justifyContent:"center"
    }
})

export default LoginScreen
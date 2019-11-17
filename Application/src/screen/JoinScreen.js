import React from 'react';
import {KeyboardAvoidingView,Text,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import color from '../resource/Color';

import {fetchJoin} from '../api/JoinApi';
import { ScrollView } from 'react-native-gesture-handler';

class JoinScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: "",
            password:"",
            name:"",
            callNumber:"",
            email:""
        }
    }

    async _onSubmit(){
        let result = await fetchJoin(this.state.id,this.state.password,this.state.name,this.state.callNumber,this.state.email);
        if(result.status = "성공"){
            this.props.navigation.navigate("Login");
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.topView}>
                <Text style={{marginBottom:"10%"}}>개인 정보를 정확히 입력해주세요.</Text>
                <Input containerStyle={{marginBottom:"2%"}} placeholder="아이디" onChangeText={(text)=>this.setState({id:text})}></Input>
                <Input containerStyle={{marginBottom:"2%"}} placeholder="비밀번호" onChangeText={(text)=>this.setState({password:text})}></Input>
                <Input containerStyle={{marginBottom:"2%"}} placeholder="이름" onChangeText={(text)=>this.setState({name:text})}></Input>
                <Input containerStyle={{marginBottom:"2%"}} placeholder="휴대폰 번호" onChangeText={(text)=>this.setState({callNumber:text})}></Input>
                <Input containerStyle={{marginBottom:"2%"}} placeholder="이메일 주소" onChangeText={(text)=>this.setState({email:text})}></Input>
                <Button buttonStyle={styles.Button} title="+ 회원등록" onPress={()=>this._onSubmit()}></Button>
                <Button buttonStyle={styles.Button} title="취소" onPress={()=>this.props.navigation.navigate("Login")}></Button>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    topView:{
        justifyContent:"center",
        flex:1,
        marginHorizontal:"10%"
    },
    Button:{
        marginTop:"5%",
        backgroundColor:color.mainColor,
        justifyContent:"flex-start",
        marginHorizontal:"20%"
    }
})

export default JoinScreen;
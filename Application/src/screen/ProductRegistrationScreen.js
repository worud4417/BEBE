import React from 'react';
import {View,Text,StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native';
import {ButtonGroup,Input,Button} from 'react-native-elements';

import color from '../resource/Color';
import {fetchAddProduct,fetchAddProductAllInfo} from '../api/SetProductApi';

class ProductRegistrationScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedIndex:0,
            manufacturer:"",
            name:"",
            year:"",
            imagesource:"",
            price:"",
            imagewonsanji:"",
            maintext:"",
            subtext1:"",
            subtext2:"",
            subtext3:"",
            subtext4:"",
            utong:"",
            certimage:"",
            cartegories:""
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle:() =>{
                return(
                    <Text style={{color:"white",marginLeft:"5%",fontSize:20}}>베 베 블 록</Text>
                )
            },
            headerStyle:{
                backgroundColor: color.mainColor
            },
        }
    }

    updateIndex(selectedIndex){
        this.setState({selectedIndex});
    }

    async _onSubmit(){
        if(this.state.selectedIndex == 0){
            let result = await fetchAddProduct(this.state.manufacturer,this.state.name,this.state.year,this.state.imagesource,this.state.price);
            if(result.message == "success"){
                alert("물건 등록");
                return this.props.navigation.navigate("Main");
            }
            else{
                alert("물건 등록 실패");
            }
        }
        else{
            let result = await fetchAddProductAllInfo(
                this.state.manufacturer,
                this.state.name,
                this.state.year,
                this.state.imagesource,
                this.state.price,
                this.state.imagewonsanji,
                this.state.maintext,
                this.state.subtext1,
                this.state.subtext2,
                this.state.subtext3,
                this.state.subtext4,
                this.state.utong,
                this.state.certimage,
                this.state.cartegories
            );
            if(result.message == "success"){
                alert("물건 등록");
                return this.props.navigation.navigate("Main");
            }
            else{
                alert("물건 등록 실패");
            }
        }
    }

    render(){
        const buttons = ["간편 등록","전체 등록"];
        const {selectedIndex} = this.state
        if(selectedIndex == 0){
            return(
                <View style={{flex:1}}>
                    <View style={{flex:1,margin:"4%"}}>
                        <ButtonGroup onPress={this.updateIndex} selectedIndex={selectedIndex} selectedButtonStyle = {{backgroundColor:color.mainColor}}
                        buttons={buttons} containerStyle={styles.buttonGroup}></ButtonGroup>
                    </View>
                    <View style={{flex:7}}>
                        <Input placeholder="제조사" onChangeText={(text)=>this.setState({manufacturer:text})}></Input>
                        <Input placeholder="품명" onChangeText={(text)=>this.setState({name:text})}></Input>
                        <Input placeholder="제조년도" onChangeText={(text)=>this.setState({year:text})}></Input>
                        <Input placeholder="이미지" onChangeText={(text)=>this.setState({imagesource:text})}></Input>
                        <Input placeholder="가격" onChangeText={(text)=>this.setState({price:text})}></Input>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Button buttonStyle={{backgroundColor:color.mainColor}} title="확인" onPress={()=>this._onSubmit()}></Button>
                    </View>
                </View>
            )
        }
        else{
            return(
                <KeyboardAvoidingView behavior="height" style={{flex:1}}>
                    <ScrollView>
                        <View style={{flex:1,margin:"4%",height:70}}>
                            <ButtonGroup onPress={this.updateIndex} selectedIndex={selectedIndex} selectedButtonStyle = {{backgroundColor:color.mainColor}}
                            buttons={buttons} containerStyle={styles.buttonGroup}></ButtonGroup>
                        </View>
                        <View behavior="height" style={{flex:7}}>
                            <Input placeholder="제조사" onChangeText={(text)=>this.setState({manufacturer:text})}></Input>
                            <Input placeholder="품명" onChangeText={(text)=>this.setState({name:text})}></Input>
                            <Input placeholder="제조년도" onChangeText={(text)=>this.setState({year:text})}></Input>
                            <Input placeholder="이미지" onChangeText={(text)=>this.setState({imagesource:text})}></Input>
                            <Input placeholder="가격" onChangeText={(text)=>this.setState({price:text})}></Input>
                            <Input placeholder="원산지이미지" onChangeText={(text)=>this.setState({imagewonsanji:text})}></Input>
                            <Input placeholder="주설명" onChangeText={(text)=>this.setState({maintext:text})}></Input>
                            <Input placeholder="부설명1" onChangeText={(text)=>this.setState({subtext1:text})}></Input>
                            <Input placeholder="부설명2" onChangeText={(text)=>this.setState({subtext2:text})}></Input>
                            <Input placeholder="부설명3" onChangeText={(text)=>this.setState({subtext3:text})}></Input>
                            <Input placeholder="부설명4" onChangeText={(text)=>this.setState({subtext4:text})}></Input>
                            <Input placeholder="유통이미지" onChangeText={(text)=>this.setState({utong:text})}></Input>
                            <Input placeholder="인증서이미지" onChangeText={(text)=>this.setState({certimage:text})}></Input>
                            <Input placeholder="분류" onChangeText={(text)=>this.setState({cartegories:text})}></Input>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <Button buttonStyle={{backgroundColor:color.mainColor}} title="확인" onPress={()=>this._onSubmit()}></Button>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            )
        }
    }
}

const styles = StyleSheet.create({
    buttonGroup : {
        height:"100%"
    }
})

export default ProductRegistrationScreen;
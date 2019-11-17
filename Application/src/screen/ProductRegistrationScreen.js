import React from 'react';
import {View,Text,StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native';
import {ButtonGroup,Input} from 'react-native-elements';

import color from '../resource/Color';
import {fetchAddProduct,fetchAddProductAllInfo} from '../api/SetProductApi';

class ProductRegistrationScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedIndex:0,
            manufacturer:"",
            name:"",
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
                        <Input placeholder="제조사" onPress={(text)=>this.setState({manufacturer:text})}></Input>
                        <Input placeholder="품명" onPress={(text)=>this.setState({name:text})}></Input>
                        <Input placeholder="제조년도" onPress={(text)=>this.setState({year:text})}></Input>
                        <Input placeholder="이미지" onPress={(text)=>this.setState({imagesource:text})}></Input>
                        <Input placeholder="가격" onPress={(text)=>this.setState({price:text})}></Input>
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
                        <Input placeholder="제조사" onPress={(text)=>this.setState({manufacturer:text})}></Input>
                        <Input placeholder="품명" onPress={(text)=>this.setState({name:text})}></Input>
                        <Input placeholder="제조년도" onPress={(text)=>this.setState({year:text})}></Input>
                        <Input placeholder="이미지" onPress={(text)=>this.setState({imagesource:text})}></Input>
                        <Input placeholder="가격" onPress={(text)=>this.setState({price:text})}></Input>
                        <Input placeholder="원산지이미지" onPress={(text)=>this.setState({imagewonsanji:text})}></Input>
                        <Input placeholder="주설명" onPress={(text)=>this.setState({maintext:text})}></Input>
                        <Input placeholder="부설명1" onPress={(text)=>this.setState({subtext1:text})}></Input>
                        <Input placeholder="부설명2" onPress={(text)=>this.setState({subtext2:text})}></Input>
                        <Input placeholder="부설명3" onPress={(text)=>this.setState({subtext3:text})}></Input>
                        <Input placeholder="부설명4" onPress={(text)=>this.setState({subtext4:text})}></Input>
                        <Input placeholder="유통이미지" onPress={(text)=>this.setState({utong:text})}></Input>
                        <Input placeholder="인증서이미지" onPress={(text)=>this.setState({certimage:text})}></Input>
                        <Input placeholder="분류" onPress={(text)=>this.setState({cartegories:text})}></Input>
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
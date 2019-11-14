import React from 'react';
import {View,Text,Image} from "react-native";
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchGetBestProduct} from '../api/GetProductApi';
import color from '../resource/Color';

class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productArray : ""
        }
    }

    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle:() =>{
                return(
                    <Text style={{color:"white",marginLeft:"5%",fontSize:20}}>BeBe Block</Text>
                )
            },
            headerStyle:{
                backgroundColor: color.mainColor
            },
        }
    };

    async componentDidMount(){
        let result = await fetchGetBestProduct();
        this.setState({productArray:result});
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:2}}>
                    <Image source={require('../../assets/ad2.png')} style={{width:"100%",height:"100%"}}></Image>
                </View>
                <View style={{flex:1,flexDirection:"row",paddingTop:"2%"}}>
                    <Input containerStyle={{width:"90%"}} inputContainerStyle={{borderRadius:10,backgroundColor:"#CCCCCC"}}></Input>
                    <Button buttonStyle={{backgroundColor:"white"}} icon={<Icon name="ios-search" size={25}></Icon>}></Button>
                </View>
                <View style={{flex:3}}>
                    <Text style={{color:color.mainColor,borderBottomWidth:1,marginHorizontal:"5%",fontSize:15,borderBottomColor:color.mainColor}}>BEST</Text>
                    
                </View>
                <View style={{flex:3}}>

                </View>
            </View>
        )
    }
}

export default MainScreen;
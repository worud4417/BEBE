import React from 'react';
import {View,Text,FlatList,ScrollView} from 'react-native';
import {Input,Button} from 'react-native-elements';

import {fetchGetProductFromBlockChain} from '../api/GetProductApi';
import ListComponent from '../component/ListComponent';
import color from '../resource/Color';

class BlockChainScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            manufacturer:"",
            list:""
        }
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

    async _onSubmit(){
        let result = await fetchGetProductFromBlockChain(this.state.manufacturer);
        if(result.message == "success"){
            this.setState({list:result.result});
        }
    }

    keyExtractor = (item,index) => index.toString();

    renderItem = ({item})=>(
        <ListComponent title={"제조사 : "+item[0]+" 연도 : "+item[1]+" 가격 : "+item[2]}></ListComponent>
    )

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:2,margin:"5%"}}>
                    <Input containerStyle={{marginBottom:"3%"}} placeholder="제조사" onChangeText={(text)=>{this.setState({manufacturer:text})}}></Input>
                    <Button buttonStyle={{backgroundColor:color.mainColor}} title="확인" onPress={()=>this._onSubmit()}></Button>
                </View>
                <View style={{flex:7}}>
                    <ScrollView>
                        <FlatList keyExtractor={this.keyExtractor} data={this.state.list} renderItem={this.renderItem}>
                        </FlatList>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default BlockChainScreen;
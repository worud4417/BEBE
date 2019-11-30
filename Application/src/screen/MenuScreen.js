/**
 * react-native application
 * @project BEBE
 * @author LEE DONG HOON
 */

import React from 'react';
import {View,Text,FlatList,ScrollView,StyleSheet} from 'react-native';
import ListComponent from '../component/ListComponent';
import color from '../resource/Color';

const menuList = [
    {
        name:"물품 등록",
        categories:"ProductRegistration",
        path:"ProductRegistration"
    },
    {
        name:"로그아웃",
        categories:"Logout",
        path:"Logout"
    },
    {
        name:"블록체인 확인",
        categories:"BlockChain",
        path:"BlockChain"
    }
]



class MenuScreen extends React.Component{
    constructor(props){
        super(props);
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

    keyExtractor = (item,index) => index.toString();

    renderItem = (item)=>{
        return <ListComponent title={item.item.name} onPress={()=>{this.props.navigation.navigate(item.item.path)}}></ListComponent>
    }

    render(){
        return(
            <View>
                <Text style={styles.titleFont}>M E M U</Text>
                <ScrollView>
                    <FlatList keyExtractor={this.keyExtractor} data={menuList} renderItem={this.renderItem}>
                    </FlatList>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleFont:{
        fontSize:30,
        color:color.mainColor,
        margin:20,
        fontWeight:"bold"
    }
})

export default MenuScreen;
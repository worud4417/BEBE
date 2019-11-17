import React from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../resource/Color';
import ListComponent from '../component/ListComponent';

const foodList = [
    {
        name:"이유식",
        categories:"babyFood"
    },
    {
        name:"간편반찬",
        categories:"simploeFood"
    },
    {
        name:"영양간식",
        categories:"nutritiousSnack"
    },
    {
        name:"건강식품",
        categories:"healthFood"
    }
]

const babyGood = [
    {
        name:"출산/수유/이유",
        categories:"mom"
    },
    {
        name:"목욕/위생",
        categories:"bath"
    },
    {
        name:"외출/잡화",
        categories:"outside"
    },
    {
        name:"장난감/완구",
        categories:"robot"
    }
    ,{
        name:"스킨케어",
        categories:"body"
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
    };

    keyExtractor = (item,index) => index.toString();

    renderItem = ({item})=>(
        <ListComponent title={item.name} onPress={()=>this.props.navigation.navigate("List",{categories:item.categories})}></ListComponent>
    )

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={styles.mainFont}>Categories</Text>
                </View>
                <View style={{flex:3}}>
                    <Text style={{fontSize:20,marginLeft:"3%",color:"gray"}}>식품</Text>
                    <ScrollView>
                        <FlatList keyExtractor={this.keyExtractor} data={foodList} renderItem={this.renderItem}>
                        </FlatList>
                    </ScrollView>
                </View>
                <View style={{flex:3}}>
                    <Text style={{fontSize:20,marginLeft:"3%",color:"gray"}}>유아 용품</Text>
                    <ScrollView>
                        <FlatList keyExtractor={this.keyExtractor} data={babyGood} renderItem={this.renderItem}>
                        </FlatList>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainFont:{
        fontSize:30,
        color:color.mainColor,
        margin:"5%",
        fontWeight:"bold"
    }
})

export default MenuScreen;
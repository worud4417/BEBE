/**
 * react-native application
 * @project BEBE
 * @author LEE DONG HOON
 */

import React from 'react';
import {View,Text,FlatList,ScrollView,StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'

import color from '../resource/Color';
import ListComponent from '../component/ListComponent';

const meunList = [
    {
        name:"MY BEBE",
        categories:"myBebe"
    },
    {
        name:"관심 상품",
        categories:"relatedProduct"
    },
    {
        name:"나의 리뷰",
        categories:"myReview"
    },
    {
        name:"활동 이력",
        categories:"activityHistory"
    },
    {
        name:"고객 센터",
        categories:"serviceCenter"
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
                    <Text style={{color:"white",marginLeft:"5%",fontSize:20}}>M Y P A G E</Text>
                )
            },
            headerStyle:{
                backgroundColor: color.mainColor
            },
        }
    };

    keyExtractor = (item,index) => index.toString();

    renderItem = ({item})=>(
        <ListComponent title={item.name} onPress={()=>alert(item.categories)}></ListComponent>
    )

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,margin:"5%",borderRadius:10,backgroundColor:color.myPageBoxColor,flexDirection:"row",alignItems:"center"}}>
                    <Avatar containerStyle={{justifyContent:"center",marginLeft:"5%"}} size='large' rounded icon={{name:'user',type:'font-awesome'}}></Avatar>
                    <View style={{marginLeft:"5%"}}>
                        <Text style={{color:color.mainColor,fontSize:30}}>{this.props.user.info.name}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Icon style={{marginTop:5}} name="ios-call" color={color.mainColor} size={20}></Icon>
                            <Text style={{color:color.mainColor,fontSize:20}}> {this.props.user.info.phonenumber}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Icon style={{marginTop:5}} name="ios-mail" color={color.mainColor} size={20}></Icon>
                            <Text style={{color:color.mainColor,fontSize:20}}> {this.props.user.info.phonenumber}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:3}}>
                    <ScrollView>
                        <FlatList keyExtractor={this.keyExtractor} data={meunList} renderItem={this.renderItem}>
                        </FlatList>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list:{
        borderColor:"#CCCCCC",
        borderTopWidth:1,
        borderTopColor:"#EEEEEE",
        borderLeftWidth:1,
        borderLeftColor:"#EEEEEE",
        borderBottomWidth:2,
        borderRightWidth:1,
        marginHorizontal:"3%",
        marginBottom:"2%",
        borderRadius:10
    }
})

function mapStateToProps(state){
    return{
        user : state.user
    }
}

export default connect(mapStateToProps)(MenuScreen);
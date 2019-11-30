/**
 * react-native application
 * @project BEBE
 * @author LEE DONG HOON
 */

import React from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView,Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigationFocus} from "react-navigation";

import color from '../resource/Color';
import {fetchGetAllProduct} from '../api/GetProductApi'; 

class ListScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
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
    };

    async componentDidMount(){
        let result = await fetchGetAllProduct(this.props.navigation.getParam("categories"));
        if(result.message == "success"){
            this.setState({list:result});
        }
        else{
            alert("에러")
        }
    }

    async componentDidUpdate(prevProps){
        console.log(this.props.isFoucused);
        if(!prevProps.isFoucused && this.props.isFoucused){
            let result = await fetchGetAllProduct(this.props.navigation.getParam("categories"));
            if(result.message == "success"){
                this.setState({list:result});
            }
            else{
                alert("에러")
            }
        }
    }

    keyExtractor = (item,index) => index.toString();

    renderItem = ({item})=>(
        <ListItem containerStyle={styles.list} titleStyle={{fontSize:15,color:"gray"}} title={item.name}
        subtitle={item.price+"원"} onPress={()=>this.props.navigation.navigate("Detail",{product:item})}
        leftAvatar={<Image source={{uri:item.imagesource}} style={{width:"30%",height:"100%"}}></Image>}
        rightIcon={<Icon name="ios-arrow-round-forward" size={30} color="gray"></Icon>} bottomDivider chevron>
        </ListItem>
    )

    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView>
                    <FlatList keyExtractor={this.keyExtractor} data={this.state.list.product} renderItem={this.renderItem}>
                    </FlatList>
                </ScrollView>
            </View>
        )
    }
}

styles = StyleSheet.create({
    list:{
        borderColor:"#CCCCCC",
        borderTopWidth:1,
        borderTopColor:"#EEEEEE",
        borderLeftWidth:1,
        borderLeftColor:"#EEEEEE",
        borderBottomWidth:2,
        borderRightWidth:1,
        marginHorizontal:"3%",
        marginBottom:"2%"
    }
})

export default withNavigationFocus(ListScreen);
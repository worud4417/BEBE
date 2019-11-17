import React from 'react';
import {View,StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'; 

import color from '../resource/Color';

export default class ListComponent extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View>
                <ListItem containerStyle={styles.list} titleStyle={{fontSize:15,color:"gray"}} title={this.props.title} onPress={this.props.onPress}
                rightIcon={<Icon name="ios-arrow-round-forward" size={30} color="gray"></Icon>} bottomDivider chevron>
                </ListItem>
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

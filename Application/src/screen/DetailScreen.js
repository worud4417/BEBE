import React from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView,Image,Dimensions} from 'react-native';
import {ListItem,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import GestureRecognizer from 'react-native-swipe-gestures';

import color from '../resource/Color';

const screenHeight = (Math.round(Dimensions.get('window').height))*1.3;

class DetailScreen extends React.Component{
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

    _onSwipeLeft(){
        this.props.navigation.navigate("My")
    }

    _onSwipeRight(){
        this.props.navigation.pop();
    }

    render(){
        return(
            <ScrollView>
                <GestureRecognizer onSwipeLeft={()=>this._onSwipeLeft()} onSwipeRight={()=>this._onSwipeRight()} config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80}} style={{height:screenHeight}}>
                    <View style={styles.TopView}>
                        <View style={{flex:4,flexDirection:"row",marginTop:"3%",marginLeft:"3%",marginRight:"5%",justifyContent:"center"}}>
                            <Image source={{uri:this.props.navigation.getParam("product").imagesource}} style={{height:"100%",width:"50%"}}></Image>
                            <View style={{marginLeft:"3%"}}>
                                <Text style={styles.mainTitleFont}>{this.props.navigation.getParam("product").name}</Text>
                                <Text style={styles.mainSubFont}>{this.props.navigation.getParam("product").price}원</Text>
                                <Text style={styles.mainSubFont}>bebe point</Text>
                                <View style={{flexDirection:"row",marginTop:"3%"}}>
                                    <Button buttonStyle={{borderColor:color.detailButton,borderWidth:1}} titleStyle={{color:color.detailButton}} title="장바구니" type="clear"></Button>
                                    <Button buttonStyle={{backgroundColor:color.detailButton}} title="구매사이트로 이동"></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1.5,justifyContent:"center",alignItems:"center"}}>
                            <Text style={styles.bebeFont}>믿음을 바탕으로 BeBeblock</Text>
                        </View>
                        <View style={{flex:3,marginHorizontal:"3%"}}>
                            <Text style={styles.subTitleFont}>원산지 정보</Text>
                            <View style={{flexDirection:"row",justifyContent:"center",flex:5}}>
                                <Image source={{uri:this.props.navigation.getParam("product").imagewonsanji}} style={{width:"50%",height:"100%"}}></Image>
                                <ScrollView>
                                    <Text>{this.props.navigation.getParam("product").maintext}</Text>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
                            <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={styles.subTextBox1}>
                                    <Text style={{alignSelf:"center"}}>{this.props.navigation.getParam("product").subtext1}</Text>
                                </View>
                                <View style={styles.subTextBox2}>
                                    <Text style={{alignSelf:"center"}}>{this.props.navigation.getParam("product").subtext2}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",flex:1}}>
                                <View style={styles.subTextBox2}>
                                    <Text style={{alignSelf:"center"}}>{this.props.navigation.getParam("product").subtext3}</Text>
                                </View>
                                <View style={styles.subTextBox1}>
                                    <Text style={{alignSelf:"center"}}>{this.props.navigation.getParam("product").subtext4}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:3,marginHorizontal:"3%",marginBottom:"2%"}}>
                            <Text style={styles.subTitleFont}>유통과정</Text>
                            <Image source={{uri:this.props.navigation.getParam("product").utong}} style={{width:"100%",height:"80%",flex:5}}></Image>
                        </View>
                        <View style={{flex:4,marginHorizontal:"3%",marginBottom:"1%"}}>
                            <Text style={styles.subTitleFont}>인증서정보</Text>
                            <Image source={{uri:this.props.navigation.getParam("product").certimage}} style={{width:"100%",height:"80%",flex:5}}></Image>
                        </View>
                    </View>
                </GestureRecognizer>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    TopView:{
        flex:1,
        width:"100%",
        height:"100%",
        borderWidth:1,
        borderColor:"white"
    },
    mainTitleFont:{
        fontSize:screenHeight/30,
        borderTopWidth:1,
        borderTopColor:"#CCCCCC",
        marginBottom:"3%",
        fontWeight:"bold"
    },
    mainSubFont:{
        fontSize:screenHeight/40
    },
    bebeFont:{
        color:color.mainColor,
        fontSize:screenHeight/40
    },
    subTitleFont:{
        fontSize:screenHeight/50,
        marginBottom:"2%",
        flex:1
    },
    subTextBox1:{
        width:"40%",
        height:"40%",
        backgroundColor:"#CCCCCC",
        margin:"1%",
        borderWidth:0.5
    },
    subTextBox2:{
        width:"40%",
        height:"40%",
        backgroundColor:color.detailButton,
        margin:"1%",
        borderWidth:0.5
    }
})

export default DetailScreen;
import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchGetBestProduct} from '../api/GetProductApi';
import color from '../resource/Color';

class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            product1:{
                imagesource:"http://mblogthumb4.phinf.naver.net/20111206_267/zergyst1988_1323165332506ite0B_JPEG/hydralisk_by_cvbtruong-d4fs2xf.jpg?type=w2",
                name:"라푼젤 곰"
            },
            product2:{
                imagesource:"http://mblogthumb3.phinf.naver.net/20130407_278/juble93_1365305642152A23o0_PNG/3.png?type=w2",
                name:"겨울왕국2 강아지"
            },
            product3:{
                imagesource:"http://mblogthumb1.phinf.naver.net/20111209_168/love1004003_1323437354270b1iDF_JPEG/Defiler_by_Mr__Jack.jpg?type=w2",
                name:"신데렐라 요정"
            }
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
        if(result != null){
            this.setState({productArray:result});
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:2}}>
                    <Image source={require('../../assets/ad2.png')} style={{width:"100%",height:"100%"}}></Image>
                </View>
                <View style={{flex:1,flexDirection:"row",paddingTop:"2%"}}>
                    <Input containerStyle={{width:"90%"}} inputContainerStyle={{borderRadius:10,backgroundColor:"#CCCCCC",borderWidth:1,borderColor:"#CCCCCC"}}></Input>
                    <Button buttonStyle={{backgroundColor:"white"}} icon={<Icon name="ios-search" size={25}></Icon>}></Button>
                </View>
                <View style={{flex:3}}>
                    <Text style={styles.bigFont}>BEST</Text>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:1}}>
                            <Text style={styles.bestTopFont}>No.1</Text>
                            <Image source={{uri:this.state.product1.imagesource}} style={styles.bestImage}></Image>
                            <Text style={{color:"gray",alignSelf:"center"}}>{this.state.product1.name}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.bestTopFont}>No.2</Text>
                            <Image source={{uri:this.state.product2.imagesource}} style={styles.bestImage}></Image>
                            <Text style={{color:"gray",alignSelf:"center"}}>{this.state.product2.name}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.bestTopFont}>No.3</Text>
                            <Image source={{uri:this.state.product3.imagesource}} style={styles.bestImage}></Image>
                            <Text style={{color:"gray",alignSelf:"center"}}>{this.state.product3.name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{borderTopWidth:1,borderTopColor:color.mainColor,marginHorizontal:"5%"}} onPress={()=>alert("All ranking")}>
                        <Text style={{color:"red",alignSelf:"center"}}>전체 랭킹 보기</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:3}}>
                    <Text style={styles.bigFont}>EVENT</Text>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:1}}>
                            <Image source={{uri:"https://steemitimages.com/DQmTTN2GN9Fs7bhbXoymyQhLkhQLSCYZ7DvWA6BEabDjUVE/image.png"}} style={styles.eventImage}></Image>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={{uri:"https://www.furiouspaul.com/pc/starcraft2/images/zerg/zerg.jpg"}} style={styles.eventImage}></Image>
                        </View>
                    </View>
                    <TouchableOpacity style={{borderTopWidth:1,borderTopColor:color.mainColor,marginHorizontal:"5%"}} onPress={()=>alert("more lookup")}>
                        <Text style={{color:"red",alignSelf:"center"}}>더 보기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigFont:{
        color:color.mainColor,
        borderBottomWidth:1,
        marginHorizontal:"5%",
        fontSize:15,
        borderBottomColor:color.mainColor
    },
    bestImage:{
        width:"80%",
        height:"70%",
        alignSelf:"center"
    },
    bestTopFont:{
        color:color.mainColor,
        marginLeft:"10%"
    },
    eventImage:{
        width:"90%",
        height:"95%",
        alignSelf:"center",
        marginTop:"2%"
    }
})

export default MainScreen;
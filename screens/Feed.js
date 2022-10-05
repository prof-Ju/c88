import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font"

import StoryCard from "../components/StoryCard"


let customFonts ={
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
}

let stories = require("../temp_stories.json")

export default class Feed extends Component {
  constructor(props){
    super(props);
    this.state={
      fontsLoaded: false
    }
  }

  async _loadFontsAsync(){
    await Font.loadAsync(customFonts);
    this.setState({fontsLoaded : true})
  }

  
  componentDidMount(){
    this._loadFontsAsync()
  }

  renderItem = ({item: story}) => {
    return <StoryCard story={story} navigation={this.props.navigation}/>
  }

  keyExtractor = (item, index) => index.toString();


  render(){
    if(!this.state.fontsLoaded){
      return(
        <Text>...loading</Text>
      )
    }
    else{
      return(
        <View style = {styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
              <Image source={require("../assets/logo.png")} style={styles.iconImage}/>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>App Narração de Histórias</Text>
            </View>


            <View style={styles.cardContainer}>
            <FlatList 
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
              />
            </View>
          
        </View>
      )
    }   
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    width:"100%",
    height:50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    width:10,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width:10,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
})
import React, {useState} from 'react';
import {Text, View, Image, Button} from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex: 1,backgroundColor: "#00CCF9"}}> 
      <View style={{flex:2, justifyContent : "center", alignItems:"center"}}>
        <Image source = {{uri: "https://picsum.photos/200"}} 
        style={{height:100, width:100}}/>
      </View>
      <View style={{flex:1,  justifyContent : "center", alignItems:"center",}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}> GROW YOUR</Text>
        <Text style={{fontSize: 30, fontWeight: "bold"}}> BUSINESS</Text>


      </View>
      <View style={{flex:1,  justifyContent : "center", alignItems:"center"}}> 
        <Text style={{ fontWeight: "bold"}}> We will help you to grow your business using </Text>
        <Text style={{ fontWeight: "bold"}}> Online server </Text>
      </View>
      <View style={{flex:1,  justifyContent : "space-evenly", flexDirection:"row" , alignItems:"center"}}>
        <Button title = "Login" color = "#E3C000" >  </Button>
        <Button title = "Sign Up" color = "#E3C000">  </Button>
      </View>
    </View>
  );
};

export default YourApp;
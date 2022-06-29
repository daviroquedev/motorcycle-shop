import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity,SafeAreaView }from 'react-native'


export default function Headermain() {

  return(
  <SafeAreaView>
  <View>
    <Text style={styles.headerText}>Seja bem vindo, user.</Text>
    <View>
    </View>
  </View>
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({

headerText:{
marginTop: 30,
fontSize: 20,
color: 'white',
margin:5,
}
})
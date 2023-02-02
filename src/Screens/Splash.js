import { View, Text,StyleSheet,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() =>{
          navigation.navigate('Login');
          
        },3000)
    },[]);
  return (
    <View style={styles.body}>
      <Image style={styles.img} source={require('../images/logo.png')} />
      <Text style={styles.puffmaster}>Puff Master</Text>
    </View>
  )
}
  const styles = StyleSheet.create ({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  img:{
    width:200,
    height:200,
  },
  puffmaster:{
    marginTop:10,
    alignSelf:'center',
    fontSize:34,
    color:'black',
    fontWeight:'50',
    fontStyle:'italic',
  },
  
})


export default Splash
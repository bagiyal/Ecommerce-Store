import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type,keyboardType}) => {
  return (
    <View style={styles.body}>
      <Image source={icon} style={styles.img} />
      <TextInput
        value={value}
        keyboardType={keyboardType?keyboardType:'default'}
        onChangeText={(txt)=>{
          onChangeText(txt);
        }}
        placeholder={placeholder}
        style={{marginLeft: 10}}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default CustomTextInput;

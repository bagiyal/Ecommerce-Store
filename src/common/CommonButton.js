import {View, Text, Touchable} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CommonButton = ({on, title, bgColor, textColor,disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        height:50,
        width:'85%',
        marginTop:50,
        borderRadius:10,
      }}
      onPress={() =>{
        on();
      }}
      >
      
      <Text style={{color: textColor}}> {title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

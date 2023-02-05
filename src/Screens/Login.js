import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import CommonButton from '../common/CommonButton';
import CustomTextInput from '../common/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setbadEmail] = useState(false);
  const [badPassword,setbadPasssword] = useState(false);

  const login = () =>{
    if(email == ''){
      setbadEmail(true);
    }else{
      setbadEmail(false);
      if(password == ''){
        setbadPasssword(true);
      }
      else{
        setbadPasssword(false);
        getData();
      }
    }
   
  }

  const getData = async() =>{
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log(mEmail,mPass);
    if(mEmail === email && mPass === password){
      navigation.navigate('Home');
    }
    else{
      alert('Incoreect Data');
    }
  }


  return (
    <View style={styles.body}>
      <Image source={require('../images/logo.png')} style={styles.img} />
      <Text style={styles.login}> Puff Master  </Text>
      <CustomTextInput
        placeholder={'Enter Email'}
        icon={require('../images/mail.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {
        badEmail === true && (
        <Text style={{marginTop: 8, marginLeft:70, color: 'red'}}>
          Please Enter Your Email{' '}
        </Text>
      )}
      <CustomTextInput
        type={'password'}
        placeholder={'Password'}
        icon={require('../images/padlock.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {
        badPassword === true && (
        <Text style={{marginTop: 8, marginLeft:70, color: 'red'}}>
          Please Enter Your Password
        </Text>
      )}
      <CommonButton
        title={'Login'}
        bgColor={'black'}
        textColor={'white'}
        on={() => {
          login();
        }}
      />

      <Text
        style={styles.createAccount}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  img: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 100,
  },
  login: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
  },
  createAccount: {
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 10,
    color:'black'
  },
});

export default Login;

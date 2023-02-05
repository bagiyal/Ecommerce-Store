import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import CommonButton from '../common/CommonButton';
import CustomTextInput from '../common/CustomTextInput';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [moblie, setMobile] = useState(false);

  const [badName, setbadName] = useState(false);
  const [badEmail, setbadEmail] = useState(false);
  const [badPassword, setbadPasssword] = useState(false);
  const [badConfirmPassword, setbadConfirmPassword] = useState(false);
  const [badMobile, setbadMobile] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const signupp = () => {
    setbuttonDisabled(true);
    
    if (name == '') {
      setbuttonDisabled(false);
      setbadName(true);
    } else {
      setbadName(false);
      if (email == '') {
        setbuttonDisabled(false);
        setbadEmail(true);
      } else {
        setbadEmail(false);
        if (moblie == '') {
          setbuttonDisabled(false);
          setbadMobile(true);
        } else {
          setbadMobile(false);
          if (password == '') {
            setbuttonDisabled(false);
            setbadPasssword(true);
          } else {
            setbadPasssword(false);
            if (confirmPassword == '') {
              setbuttonDisabled(false);
              setbadConfirmPassword(true);
            } else {
              setbadConfirmPassword(false);
              if (password !== confirmPassword) {
                setbuttonDisabled(false);
                setbadConfirmPassword(true);
              } else {
                setbadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };

  const saveData = async () => {

      console.warn('yes');
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('MOBILE', moblie);
      await AsyncStorage.setItem('PASSWORD', password);
      navigation.goBack();
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
        <Image source={require('../images/logo.png')} style={styles.img} />
        <Text style={styles.login}> Sign up </Text>
        <CustomTextInput
          placeholder={'Full Name'}
          icon={require('../images/user.png')}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
        />
        {badName === true && (
          <Text style={{marginTop: 8, marginLeft: 70, color: 'red'}}>
            Please Enter Your Full Name
          </Text>
        )}
        <CustomTextInput
          placeholder={'Email'}
          icon={require('../images/mail.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        {badEmail === true && (
          <Text style={{marginTop: 8, marginLeft: 70, color: 'red'}}>
            Please Enter Your Email{' '}
          </Text>
        )}
        <CustomTextInput
          placeholder={'Phone Number'}
          icon={require('../images/call.png')}
          value={moblie}
          keyboardType={'number-pad'}
          onChangeText={txt => {
            setMobile(txt);
          }}
        />
        {badMobile === true && (
          <Text style={{marginTop: 8, marginLeft: 70, color: 'red'}}>
            Please Enter Your Phone Number
          </Text>
        )}
        <CustomTextInput
          value={password}
          placeholder={'Password'}
          icon={require('../images/padlock.png')}
          onChangeText={txt => {
            setPassword(txt);
          }}
        />
        {badPassword === true && (
          <Text style={{marginTop: 8, marginLeft: 70, color: 'red'}}>
            Please Enter Your Password
          </Text>
        )}

        <CustomTextInput
          value={confirmPassword}
          placeholder={'Confirm Password'}
          icon={require('../images/padlock.png')}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
        />
        {badConfirmPassword === true && (
          <Text style={{marginTop: 8, marginLeft: 70, color: 'red'}}>
            Please Enter Your Confirm Password
          </Text>
        )}
        <CommonButton
          title={'Sign Up'}
          textColor={'white'}
          bgColor={buttonDisabled? '#8e8e8e':'#000'}
          on={() => {
            signupp();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={styles.createAccount}
          onPress={() => {
            navigation.goBack();
          }}>
          Already Have Account
        </Text>
      </View>
    </ScrollView>
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
    marginTop: 10,
  },
  login: {
    marginTop: 10,
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
    color:'black',
  },
});

export default Signup;

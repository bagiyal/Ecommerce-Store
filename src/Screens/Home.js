import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import WishList from '../bottom/Wishlist';
import Profile from '../bottom/Profile';

const Home = () => {
  const[selectedTab, setSelectedTab] = useState(0);
  
  return (
    <View style={{flex: 1}}>
    {
    selectedTab == 0 ? (
      <Main />
    ) : selectedTab == 1 ? (
      <Search />
    ) : selectedTab == 2 ? (
      <Cart />
    ) : selectedTab == 3 ? (
      <WishList />
    ) : (
      <Profile />
    )
  }
      <View style={styles.subView}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{
            setSelectedTab(0);
          }}
          >
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{
            setSelectedTab(1);
          }}
          >
          <Image
            source={require('../images/find.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: selectedTab == 2 ? 'green' : '#000',
            justifyContent: 'center',
            borderRadius: 25,
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../images/shopping.png')}
            style={{width: 24, height: 24, tintColor: '#fff'}}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 5,
              right: 5,
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
            </Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{
            setSelectedTab(3);
          }}
          >
          <Image
            source={require('../images/wishlist.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{
            setSelectedTab(4);
          }}
          >
          <Image
            source={require('../images/user.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subView: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Home;

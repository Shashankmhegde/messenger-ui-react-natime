import React from 'react'
import { Text,Image ,StyleSheet} from 'react-native'
import NavBar, { NavTitle, NavButton } from 'react-native-nav'
import styles from 'react-native-nav/styles';

const ac='active Now'

export default function NavBarCustom() {
  return (
    <NavBar style={styles.navBarAndroid}>
      <Image source={require('./images.png')}
          
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
        />
      <NavTitle>
      User{'\n'}
        <Text style={{ fontSize: 10, color: '#0EB030'}}>
          {ac}
        </Text>
      </NavTitle>
    
    </NavBar>
  )
}

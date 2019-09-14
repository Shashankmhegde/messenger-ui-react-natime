import React from 'react'
import { Text,Image ,StyleSheet} from 'react-native'
import NavBar, { NavTitle, NavButton } from 'react-native-nav'
import styles from 'react-native-nav/styles';
const U = 'User'
const ac='active Now'

export default function NavBarCustom() {
  return (
    <NavBar style={styles.navBarAndroid}>
      <Image source={require('./iconfinder_React.js_logo_1174949.png')}
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
        />
      <NavTitle>
     <Text> {U}</Text>{'\n'}
        <Text style={{ fontSize: 10, color: '#0EB030'}}>
          {ac}
        </Text>
      </NavTitle>
    
    </NavBar>
  )
}

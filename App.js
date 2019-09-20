import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
import Navbar from './navbar'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '',message:['']};
    this.onChangeText = this.onChangeText.bind(this);
    this.buttonClickListener=this.buttonClickListener.bind(this);
    this.display=this.display.bind(this);
  }
  
  onChangeText(event) {
    this.setState({value: event.target.value});
  }
  onPress=()=>{
    alert('pressed')

  }

  buttonClickListener= () => {
    alert("clicked");
    this.state.message[0]=this.state.value
    if (!Array.isArray(this.state.message))
      this.state.message = [this.state.value];
    else this.state.message.concat(" ",this.state.value);
  return(this.state.message.reverse());
    
  }
  display= () => {
      return(
      <View style={[styles.balloon, {alignSelf:'flex-end',backgroundColor: '#1084ff',maxWidth: 200}]}>
      <Text style={{paddingTop: 5, color: 'white'}}>{this.state.value}</Text>
     <View
       style={[
       styles.arrowContainer,
       styles.arrowRightContainer,
     ]}
   >
   <View style={styles.arrowLeft} />
   </View>
   </View>
    )
  }

render(){
  return (
    <View>
    <Navbar />
    <ScrollView>
    
    <View style={[styles.balloon, {alignSelf:'flex-end',backgroundColor: '#1084ff',maxWidth: 100,marginTop:2}]}>
    
      <Text style={{paddingTop: 5, color: 'white'}}>{' hi'}</Text>

      <View
      style={[
        styles.arrowContainer,
        styles.arrowRightContainer,
      ]}
    >
    <View style={styles.arrowLeft} />
    </View>
    </View>
    
    <View style={[styles.balloon, {backgroundColor: '#d8dee8',maxWidth: 60}]}>
    
      <Text style={{paddingTop: 5, color: 'black'}}>{' hello'}</Text>

      <View
      style={[
        styles.arrowContainer,
        styles.arrowLeftContainer,
      ]}
    >
      <View style={styles.arrowLeft} />
    </View>
    </View>

    <View style={[styles.balloon, {backgroundColor: '#d8dee8',maxWidth: 135,marginTop:3}]}>
    
      <Text style={{paddingTop: 4, color: 'black'}}>{' How is it going ??'}</Text>

      <View
      style={[
        styles.arrowContainer,
        styles.arrowLeftContainer,
      ]}
    >
      <View style={styles.arrowLeft} />
    </View>
    </View>

    <View style={[styles.balloon, {alignSelf:'flex-end',backgroundColor: '#1084ff',maxWidth: 200}]}>
    
      <Text style={{paddingTop: 5, color: 'white'}}>{' I am good you tell me ?'}</Text>

      <View
      style={[
        styles.arrowContainer,
        styles.arrowRightContainer,
      ]}
    >
    <View style={styles.arrowLeft} />
    </View>
    </View>

    <View style={[styles.balloon, {backgroundColor: '#d8dee8', maxWidth: 100}]}>
    
    <Text style={{paddingTop: 5, color: 'black'}}>{' Ok Cool !!'}</Text>

    <View
    style={[
      styles.arrowContainer,
      styles.arrowLeftContainer,
    ]}
  >
    <View style={styles.arrowLeft} />
  </View>
  </View>
 
  </ScrollView>
  <TextInput
          style={{height: 40,alignSelf:'stretch',marginTop:440}}
          placeholder="Enter a message !"
          onChangeText={(value) => this.setState({value})}
          
        />
        <KeyboardAvoidingView  />
        <Button
          onPress={this.onPress,this.buttonClickListener,this.display}
          title='send'
          style={ { height: 20,width: 20,  borderRadius:40}}
                  />
        <KeyboardAvoidingView />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  item: {
    marginVertical: 14,
    flexDirection: 'row'
 },
 itemIn: {
     marginLeft: 10
 },
 itemOut: {
    alignSelf: 'auto',
    marginRight: 10
 },
   balloon: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
},
 arrowContainer: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     zIndex: -1
 },
 arrowLeftContainer: {
   alignSelf:'flex-start',
     justifyContent: 'flex-end',
     alignItems: 'flex-start',
 },
 arrowRightContainer:{
  alignSelf:'flex-end',
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
 },
 
 arrowLeft: {
     left: -20,
 }
});

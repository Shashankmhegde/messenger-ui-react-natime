import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat, Time } from "react-native-gifted-chat";
import NavBar from './navbar'

const user = {
  _id: '1',
  name: 'me',
}
const otherUser = {
  _id: '2',
  name: 'other',
}


export default class App extends React.Component {
  state = {
    loadEarlier: true,
  
      messages: [
      {
        user :'other',
        _id :'5',
        text :'OK Cool !',
        createdAt :new Date()
      },
      { 
        user:'',
        _id : '4',
        text : "I am good you tell me ? ",
        createdAt :new Date()
      },
      {
        user : 'other',
        _id : '3',
        text : "how is it going ??",
        createdAt : new Date()

      },
      {
        user:'',
        _id : '2',
        text : 'Hello',
        createdAt:  new Time(),
      },
      {
        user : 'other',
        _id : '1',
        text : 'Hi',
        createdAt : new Time()
      },

    ]
  };
  
  onSend = (messages = []) => {
    this.setState(previousState => {
       sentMessages = [{ ...messages[0], }]
      return {
        messages: GiftedChat.append(this.state.messages, sentMessages)
      }
    })
  }

  
render() {
    return (
      <View style={styles.container}>
        <NavBar />

        <GiftedChat 
        
        messages={this.state.messages}
        onSend={this.onSend}
         />
        
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    
  }
});
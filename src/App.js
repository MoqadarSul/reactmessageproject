import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatPage from './ChatPageAmy';
import ChatPageJohn from './ChatPageJohn';
import AmyNewText from './AmyNewText';
import JohnNewText from './JohnNewText';

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {

  state = {
    users : [{
      username : 'Amy' 
    },
    {
      username : 'John'
    }],
    messages : [
      {
        username: 'Amy', text: 'Hi, Jon!'
      },
      {
        username: 'Amy', text: 'How are you?'
      },
      {
        username: 'John', text: 'Hi, Amy! Good, you?'
      }
    ]

  }

  addNewMessage = (newMessage) =>{

    this.setState((prevState) =>({
        messages : [...prevState, newMessage]
    }))

  }

  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
              <ChatPage users = {this.state.users} messages = {this.state.messages}/>
            <div>
              <AmyNewText />
            </div>
          </div>
           
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
           <ChatPageJohn users = {this.state.users} messages = {this.state.messages} />
            <div>
             <JohnNewText />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

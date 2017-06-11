import React, {Component} from 'react';
import {TextInput, Button, View} from 'react-native';

class SearchBar extends Component{
  state = {text:''};
  render(){
    return (  <View style = {styles.containerStyle}>
              <TextInput ref = 'textInput'
              value = {this.state.text}
              placeholder = {this.props.placeholder}
              style = {styles.textinputStyle}
              onChangeText = {text => this.setState({text : text})}/>
              <Button title = 'Search' onPress = {this.props._onPress} style = {styles.buttonStyle}/>
              </View>);
    }
    getText(){
      console.log(this.state.text);
      return this.state.text;
    }
}

const styles = {
  containerStyle:{
    backgroundColor : '#B02C14',
    height : 44,
    flexDirection : 'row',
    justifyContent : 'center',
  },
  textinputStyle:{
    height : 32,
    flex : 1,
    marginLeft : 10,
    backgroundColor : '#FFF',
    padding : 5
  },
  buttonStyle : {
    width : 100,
    height : 32,
    margineRight : 10,
    color : '#841584'
  }
};

export default SearchBar;

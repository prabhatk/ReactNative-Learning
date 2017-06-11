import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
  const {textStyle,viewStyle} = styles; // concept is called DeStructuring
  return (
    <View style = {viewStyle}>
    <Text style = {textStyle}>{props.title}</Text>
    </View>
  );
};
const styles = {
  viewStyle:{
    backgroundColor : '#B02C14',
    alignItems : 'center',
    justifyContent : 'center',
    height : 64,
    paddingTop : 20,
    shadowColor : '#000',
    shadowOffset :{width : 0, height : 2},
    shadowOpacity : 0.2
  },
  textStyle : {
    fontSize :20
  }
};
export default Header;

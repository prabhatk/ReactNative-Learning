import React from 'react';
import {View} from 'react-native';

const MovieCardSection = (props) => {
  return (
    <View style = {styles.containerStyle}>
    {props.children}
    </View>
  );
};
const styles = {
  containerStyle : {
    borderWidth : 1,
    borderRadius: 2,
    padding : 5,
    borderColor: '#ddd',
    flexDirection : 'row'
  }
};

export default MovieCardSection;

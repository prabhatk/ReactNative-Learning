import React from 'react';
import {View} from 'react-native';


const MovieCard = (props) => {
  return(
    <View style = {styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles ={
containerStyle:{
  borderWidth : 1,
  borderRadius: 2,
  borderColor: '#ddd',
  elevation : 1,
  marginTop : 5,
  marginLeft : 5,
  marginRight : 5
}
}
export default MovieCard;

import React from 'react';
import {Text,View,Image} from 'react-native';
import MovieCard from './MovieCard';
import MovieCardSection from './MovieCardSection';
const imageURI = 'https://image.tmdb.org/t/p/w92';

const MovieDetail = (props) =>{
  // console.log(imageURI+props.movie.poster_path);
return(
  <MovieCard>
    <MovieCardSection>
    <View>
    <Image
    style = {styles.thumbnailStyle}
    source = {{uri:imageURI+props.movie.poster_path}}
    />
    </View>
    <View style = {styles.titleStyle}>
    <Text style = {styles.movieTitleStyle}>{props.movie.title}</Text>
    <Text style = {styles.movieSubtitleStyle}>{props.movie.release_date}</Text>
    <Text style = {styles.movieSubtitleStyle}>{props.movie.vote_average} / 10 </Text>
    </View>
    </MovieCardSection>
  </MovieCard>
);
};

const styles = {

  titleStyle:{
    flexDirection : 'column',
    justifyContent : 'space-around',
    flex : 1
  },
  thumbnailStyle :{
    height : 92,
    width : 92,
    marginRight : 10
  },
  movieTitleStyle :{
    color : '#000',
    fontWeight : 'bold',
    justifyContent : 'space-around'
  },
  movieSubtitleStyle :{
    color : 'grey',
    flex : 1
  }
};
export default MovieDetail;

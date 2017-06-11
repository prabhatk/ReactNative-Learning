import React , {Component} from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import MovieDetail from './MovieDetail'
//Start : Functional Component which return some anount of JSX
/*const MovieList = () => {
return (
 <View>
   <Text> Movie List </Text>
 </View>
);
};*/
//End :  this type of "const MovieList ...." is called functional Components
//Start Class based component have render function
class MovieList extends Component {
  componentWillMount() {
    this.state = { results:[],
              currentPage : 0,
              totalPage : 0,
              searchString:"",
             isLoading : false};
  }
  searchForMovie(){
    this.setState({isLoading : true});
    return fetch('https://api.themoviedb.org/3/search/movie?api_key=824ee5711b7d37156200d4648c7538e9&query='+this.props.searchString)
      .then((response) => response.json())
        .then((responseJson) => {
        if (responseJson) {
          debugger;
          var object = {}
          if (responseJson.results) {
            object.results = responseJson.results;
          }
          if (responseJson.page) {
            object.currentPage = responseJson.page;
          }
          if (responseJson.total_pages) {
            object.totalPage = responseJson.total_pages;
          }
          if (responseJson.results) {
            object.isLoading = false;
            object.searchString = this.props.searchString;
            this.setState(object);
          }
        }
        //  console.log(responseJson.results);
        // return responseJson.movies;
        console.log(this.state.searchString + " => current page is " + this.state.currentPage + " and total pages are " + this.state.totalPage);
      })
      .catch((error) => {
        console.error(error);
        this.setState({isLoading : false});
      });
  }
  renderMovies(){
    debugger

    if(this.props.searchString != this.state.searchString){
      if(this.state.isLoading ==  true){
        // this.searchForMovie();
      }
      else {
        this.searchForMovie();
        return this.showLoading();
      }
    }
    else if(this.state.results.length > 0){
      return this.state.results.map( movie => <MovieDetail key = {movie.id} movie = {movie}/>);
    }
  }
  showLoading(){
      return(<View style = {{backgroundColor:'blue'}}>
      </View>);
  }



  render() {
    return (
      <ScrollView ref = 'ScrollView'>
        {this.renderMovies()}
      </ScrollView>
    );
  }
}
//end it doesnot have semicolon because class dosent required semi colon
export default MovieList;

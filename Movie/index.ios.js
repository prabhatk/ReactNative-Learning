/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MovieList from './src/Components/MovieList';
import Header from './src/Components/Header';
import SearchBar from './src/Components/SearchBar';
/*
const App = () => (
  // returning with this view tag is because only one component shoud
  //return, if multiuple component to return please wrap up them in single <View>
  <View style = {{flex:1}}>
      <Header title = {'Movie'}/>
      <SearchBar placeholder = "Search Movie..." _onPress = {console.log('pressed') }/>
      <MovieList searchString = 'Fast'/>
      </View>
    );

*/
class App extends Component {
  state = {searchText : ''};
  // this will be rerender when we change state key for any parameter.
  updateMovieList(){
    if (this.refs["searchBar"] && this.refs["searchBar"].getText) {
      return <MovieList refs = 'list' searchString = {this.refs["searchBar"].getText()}/>
    }
  }
  render(){
    return(<View style = {{flex:1}}>
        <Header title = {'Movie'}/>
        <SearchBar ref = 'searchBar'
        placeholder = "Search Movie..."
        _onPress = {()=>{this.setState({})}}/>
        {this.updateMovieList()}
        </View>);
  }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('Movie', () => App);

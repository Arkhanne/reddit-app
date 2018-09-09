import React, { Component } from 'react';
import { ActivityIndicator, Text, Image, View, StyleSheet, FlatList } from 'react-native';

import { Post } from './post';

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      alignContent:'center',
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'center',
  },
})

// Sacar a un fichero y hacer import
async function fetchData() {
  const result = await fetch('https://api.reddit.com/r/pics/new.json');
  const response = await result.json();
  return response;
}

// Sacar a un fichero
export default class PostsList extends Component {
  state = {
    isLoading: true,
    dataSource: [],
  }

  async componentDidMount() {
    const responseJson = await fetchData();

    this.setState({
      dataSource: responseJson, 
      isLoading: false
    });
  }

  handleClick = (art) => {
    this.setState({selected: art.id})
  }

  render() {
    const {isLoading, dataSource} = this.state;

    if (isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <FlatList
          data = {dataSource.data.children}
          renderItem = {
            ({item}) => 
              /* <Post 
                key=''
                onClick = {this.handleClick}
                selected = {this.selected === post.id}
                post={post}
              /> */
              
              <Post
                item = {item}
              />
          }
          keyExtractor = {(item, index) => index}
        />
      </View>
    );
  }
}

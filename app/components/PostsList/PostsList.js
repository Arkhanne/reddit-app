import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';

import styles from './styles';
import Post from '../Post/Post';
import fetchData from '../FetchData/fetchData';

class PostsList extends Component {
  state = {
    isLoading: true,
    dataSource: [],
  }

  async componentDidMount() {
    const responseJson = await fetchData('https://api.reddit.com/r/pics/new.json');

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

export default PostsList;
import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';

import styles from './styles';
import settings from '../../config/settings'
import Post from '../Post';
import fetchData from '../../lib/fetchData';

class PostsList extends Component {
  state = {
    isLoading: true,
    dataSource: [],
  }

  async componentDidMount() {
    const responseJson = await fetchData(settings.DATA_URL);

    this.setState({
      dataSource: responseJson, 
      isLoading: false
    });
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
              <Post
                item = {item}
              />
          }
          keyExtractor = {(item, index) => item.data.id}
        />
      </View>
    );
  }
}

export default PostsList;
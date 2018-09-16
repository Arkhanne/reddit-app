import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, RefreshControl } from 'react-native';

import settings from '../../config/settings'
import Post from '../Post';
import fetchData from '../../lib/fetchData';

class PostsList extends Component {
  state = {
    loading: true,
    dataSource: [],
    refreshing: false,
  }

  async componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    return !this.state.refreshing;
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    
    this.getData();
  }

  async getData() {
    const responseJson = await fetchData(settings.DATA_URL);

    this.setState({
      dataSource: responseJson, 
      loading: false,
      refreshing: false,
    });
  }
  
  render() {
    const {loading, dataSource, refreshing} = this.state;

    if (loading) {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          refreshControl = {
            <RefreshControl
              refreshing = {refreshing}
              onRefresh = {this._onRefresh}
            />
          }
          data = {dataSource.data.children}
          renderItem = {
            ({item}) => 
              <Post
                navigation = {this.props.navigation}
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
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

  async getData() {
    const responseJson = await fetchData(settings.DATA_URL);

    this.setState({
      dataSource: responseJson, 
      loading: false,
      refreshing: false,
    });
  }

  componentDidUpdate() {
    return !this.state.refreshing;
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
          keyExtractor = {(item) => item.data.id}
        />
      </View>
    );
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    
    this.getData();
  }
}

export default PostsList;
import React, { Component } from 'react';
import { ActivityIndicator, Text, Image, View, StyleSheet, FlatList  } from 'react-native';

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

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
    return fetch('https://api.reddit.com/r/pics/new.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dataSource: responseJson, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.dataSource.data.children}
          renderItem = {
            ({item}) => 
              <View>
                <Text>{item.data.title}</Text>
                <Image source={{uri: item.data.thumbnail}} style={{width: 193, height: 110}}/>
              </View>
          }
          keyExtractor = {(item, index) => index}
        />
      </View>
    );
  }

  // renderItem(data) {
  //   return <Image source={{uri: data}} style={{width: 193, height: 110}}/>;
  // }
}

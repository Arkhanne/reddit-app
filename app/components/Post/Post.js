import React, { Component } from 'react';
import { Text, Image, View, Button, Linking } from 'react-native';

import settings from '../../config/settings'

class Post extends Component {
  render() {
    const {item} = this.props;
    const url = settings.BASE_URL + item.data.permalink;

    return (
      <View>
        <Text>TITLE: {item.data.title}</Text>
        <Image source={{uri: item.data.thumbnail}} style={{width: 193, height: 110}}/>
        <Text>AUTHOR: {item.data.author}</Text>
        <Text>SCORE: {item.data.score}</Text>
        <Text>COMMENTS: {item.data.num_comments}</Text>
        
        <Button
          title="Go to Details"
          onPress={() => Linking.openURL(url)}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
      </View>
    )
  }
}

export default Post;
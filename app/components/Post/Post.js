import React, { Component } from 'react';
import { Text, Image, View, Button, Linking } from 'react-native';

import settings from '../../config/settings';
import styles from './styles';

class Post extends Component {
  render() {
    const {item} = this.props;
    const url = settings.BASE_URL + item.data.permalink;
    const date = new Date(item.data.created * 1000);
    const votesStr = item.data.score == 1 ? 'vote' : 'votes';
    const commentStr = item.data.num_comments == 1 ? 'comment' : 'comments'

    return (
      <View>
        <View style = {styles.container}>
          <Image source = {{uri: item.data.thumbnail}} style = {styles.image}/>
          <View style = {styles.postData}>
            <Text>{date.toLocaleString()}</Text>
            <Text 
              style = {styles.title}
              onPress = {() => Linking.openURL(url)}>
              {item.data.title}
            </Text>
            <Text>by {item.data.author}</Text>
            <View style = {styles.ratings}>
              <Text>{item.data.score} {votesStr}   {item.data.num_comments} {commentStr}</Text>
            </View>
          </View>
        </View>
      </View> 
    )
  }
}

export default Post;
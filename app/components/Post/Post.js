import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import timeago from 'timeago.js';

import settings from '../../config/settings';
import styles from './styles';
import validURL from '../../lib/validURL'

class Post extends Component {
  render() {
    const {item} = this.props;
    const url = settings.BASE_URL + item.data.permalink;
    const date = new Date(item.data.created_utc * 1000);
    const votesStr = item.data.score == 1 ? 'vote' : 'votes';
    const commentStr = item.data.num_comments == 1 ? 'comment' : 'comments';
    const image = this.setImage(item.data.thumbnail);

    return (
      <View>
        <View style = {styles.container}>
          {image}
          <View style = {styles.postData}>
            <Text 
              style = {styles.title}
              onPress = {() => this.props.navigation.navigate('Detail', {url})}>
              {item.data.title}
            </Text>
            <Text style = {styles.authorText}>
              submitted {timeago().format(date)} by {item.data.author}
            </Text>
            <View style = {styles.ratings}>
              <Text style = {styles.ratingText}>
                {item.data.score} {votesStr}   {item.data.num_comments} {commentStr}
              </Text>
            </View>
          </View>
        </View>
      </View> 
    )
  }

  setImage(str) {
    image = <Image source = {this.setThumbnail(str)} style = {styles.image}/>
    
    return image;
  }

  setThumbnail(str) {
    let thumbnail = '';

    if (validURL(str)) {
      thumbnail = {uri: str}
    } else {
      switch (str) {
        case 'default':
          thumbnail = require('./images/Greylink.png');
          break;

        case 'self':
          thumbnail = require('./images/bubble.png');
          break;

        case 'image':
          thumbnail = require('./images/no-picture.png');
          break;

        case 'spoiler':
          thumbnail = require('./images/spoiler.png');
          break;

        default:
          thumbnail = require('./images/Greylink.png');
          break;
      }
    }

    return thumbnail;
  }
}

export default Post;
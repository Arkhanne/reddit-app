import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

export class Post extends Component {
  // handleClick = () => {
  //   this.props.onClick(
  //     this.props.post
  //   )
  // }

  render() {
    const {item} = this.props;

    return (
      <View>
        <Text>TITLE: {item.data.title}</Text>
        <Image source={{uri: item.data.thumbnail}} style={{width: 193, height: 110}}/>
        <Text>AUTHOR: {item.data.author}</Text>
        <Text>SCORE: {item.data.score}</Text>
        <Text>COMMENTS: {item.data.num_comments}</Text>

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

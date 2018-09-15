import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Detail extends Component {
  url = '';

  constructor(props) {
    super(props);

    const { navigation } = props;
    url = navigation.getParam('url', '');
  }
  
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source = { {uri: url} }
        style = { {marginTop: 20} }
      />
    );
  }
}

import React  from 'react';
import { View } from 'react-native';

import PostsList from '../components/PostsList/PostsList';
import styles from '../config/styles'

const Home = ({ navigation }) => {
  return (
    <View style = {styles.container}>
      <PostsList 
        navigation = {navigation}>
      </PostsList>
    </View>
  );
};

export default Home;
import React  from 'react';
import { View } from 'react-native';

import PostsList from '../components/PostsList/PostsList';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PostsList 
        navigation = {navigation}>
      </PostsList>
    </View>
  );
};

export default Home;
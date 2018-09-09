import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';

import PostsList from '../components/PostsList/PostsList';

const Home = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PostsList></PostsList>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};

// Home.propTypes = {
//   navigation: PropTypes.object,
// };

export default Home;
import React, { PropTypes } from 'react';
import { Text, View} from 'react-native';
// import Meteor, { createContainer } from 'react-native-meteor';

// import Loading from '../components/Loading';
// import { colors } from '../config/styles';

// const window = Dimensions.get('window');
// const MARGIN_HORIZONTAL = 10;
// const cardSize = window.width - (MARGIN_HORIZONTAL * 2);

const Details = ({ detailsReady, details }) => {
  // if (!detailsReady) {
  //   return <Loading />;
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

// Details.propTypes = {
//   detailsReady: PropTypes.bool,
//   details: PropTypes.array,
// };

// export default createContainer(() => {
//   return {
//     detailsReady: true,
//     details: [],
//   };
// }, Details);

export default Details;
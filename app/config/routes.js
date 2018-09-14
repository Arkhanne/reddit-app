import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

export default RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
)
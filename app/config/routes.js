import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';

export default RootStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
)
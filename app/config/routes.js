import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

export default RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
)
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import RepoList from './RepoList';
import VendorList from './VendorList';

const TabNavigator = createBottomTabNavigator({
  RepoList: RepoList,
  VendorList: VendorList,
});

export default createAppContainer(TabNavigator);
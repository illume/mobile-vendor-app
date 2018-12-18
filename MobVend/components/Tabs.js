import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import RepoList from './RepoList';
import VendorList from './VendorList';
import VendorForm from './VendorForm';

const TabNavigator = createBottomTabNavigator({
  RepoList: RepoList,
  VendorList: VendorList,
  VendorForm: VendorForm,
});

export default createAppContainer(TabNavigator);
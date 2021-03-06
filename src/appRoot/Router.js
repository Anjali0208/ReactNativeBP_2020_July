import {createSwitchNavigator} from 'react-navigation';
import LoginRoot from './AuthRoot';
import MainRoot from './MainRoot';

export const createRootNavigator = (isLogin) => {
  return createSwitchNavigator(
    {
      LoginRoot: {screen: LoginRoot()},
      HomeRoot: {screen: MainRoot()},
    },
    {
      initialRouteName: isLogin ? 'HomeRoot' : 'LoginRoot',
    },
  );
};

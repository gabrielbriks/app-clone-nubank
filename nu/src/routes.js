
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../src/pages/Main/index';

/* Utilizando o "SwitchNavigator" para nao aparecer o header */
const Routes =  createAppContainer(createSwitchNavigator({ Main },));


export default Routes;
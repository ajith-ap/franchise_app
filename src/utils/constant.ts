import { Dimensions, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

/* -------------------------------------------------------------------------- */
/*                               App Dimensions                               */
/* -------------------------------------------------------------------------- */

export const WIN_WIDTH = Dimensions.get('window').width;
export const WIN_HEIGHT = Dimensions.get('window').height;

export const STATUS_BAR_HEIGHT = StatusBarManager.HEIGHT
export const CONTENT_HEIGHT = WIN_HEIGHT - STATUS_BAR_HEIGHT;

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

/* -------------------------------------------------------------------------- */


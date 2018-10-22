import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
import App from './build/App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('katasuperheroesreactnative', () => App);

import 'node-libs-react-native/globals';
import { registerRootComponent } from 'expo';
import App from './App';
if (!Error.captureStackTrace) {
    // captureStackTrace is only available when debugging
    Error.captureStackTrace = () => { };
}

registerRootComponent(App);

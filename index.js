import Expo from 'expo';
import './shim.js';
import App from './App';
if (!Error.captureStackTrace) {
    // captureStackTrace is only available when debugging
    Error.captureStackTrace = () => { };
}

const EttaAppComponent = () => {

    return (
        <App />
    );
};

Expo.registerRootComponent('EttaWallet', () => EttaAppComponent);

import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './navigation';
import Toast from 'react-native-toast-message';
import {toastConfig} from './utils/toast';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
        <Toast position="bottom" config={toastConfig} />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

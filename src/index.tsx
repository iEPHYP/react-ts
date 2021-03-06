import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import registerServiceWorker from './registerServiceWorker';
import { getConfiguredStore } from './store';
import { Provider } from 'react-redux';

const store = getConfiguredStore();

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

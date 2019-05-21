import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faEllipsisH, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import HomePage from './pages/HomePage';

library.add(faStroopwafel, faEllipsisH, faChevronDown, faChevronUp);

class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import store from './store'




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Hello posts</h1>
        </header>
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

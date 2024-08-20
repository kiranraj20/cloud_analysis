import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import DashboardComponent from './Components/dashBoard';

const  App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* ... your header content */}
        </header>
        <DashboardComponent />
      </div>
    </Provider>
  );
}

export default App;

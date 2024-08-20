import { createStore } from 'redux';
import initialData from './initialData';

const initialState = {
  dashboard: initialData.dashboard
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      // ... logic to add a widget
      return newState;
    case 'REMOVE_WIDGET':
      // ... logic to remove a widget
      return newState;
    default:
      return state;
  }
};

const store = createStore(dashboardReducer);

export default store;
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootModalReducer from '../features/rootModal/rootModalSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    rootModal: rootModalReducer
  },
});

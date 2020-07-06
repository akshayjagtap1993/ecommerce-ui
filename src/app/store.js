import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product/reducers/productReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

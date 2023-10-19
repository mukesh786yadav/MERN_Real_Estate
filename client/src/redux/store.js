// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import  useReducer  from './user/userSlice.js'

// export default configureStore({
//   reducer: {user:useReducer},
//   middleware:(getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         serializableCheck:false,
//     }),
// })
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
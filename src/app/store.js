import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice.js'
import counterReducer from '../features/counter/counterSlice.js'
import dynamicCounterReducer from '../features/counter/dynamicCounterSlice.js'
import itemReducer from '../features/items/itemSlice.js'
import postReducer from '../features/posts/postSlice.js'
import videosReducer from '../features/videos/videosSlice.js'
import tagsReducer from '../features/videos/tagsSlice.js'
import videoReducer from '../features/videos/videoSlice.js'
import transactionReducer from '../features/transactions/transactionSlice.js'
import podcastReducer from '../features/podcasts/podcastSlice.js'
import filterReducer from '../features/videos/filterSlice.js'
import { apiSlice } from '../features/api/apiSlice.js'

// import { createLogger } from 'redux-logger'
// const logger = createLogger();

export const store = configureStore({
  reducer: { 
    auth: authReducer,
    
    // reducers for counter app
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    
    // reducers for all apps
    items: itemReducer,
    posts: postReducer,
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    transactions: transactionReducer,
    podcasts: podcastReducer,
    filter: filterReducer,

    // api slice reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: import.meta.env.NODE_ENV !== 'production',
})

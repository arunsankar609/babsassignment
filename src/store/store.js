import { configureStore } from '@reduxjs/toolkit'
import  viewMsgs  from '../slice/messageSlice'
export const store = configureStore({
  
  reducer: {
    messages:viewMsgs
  },
})
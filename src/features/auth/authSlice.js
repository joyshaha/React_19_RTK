import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
}

// const initialStateAuth  = {
//   token: undefined,
//   username: undefined,
// }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // initialState: initialStateAuth,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    signUp: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    signOut: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },

    // using the authApi
    logIn: (state, action) => {
      state.token = action.payload.token
      state.username = action.payload.username
    },
    logOut: (state) => {
      state.token = undefined
      state.username = undefined
    },
  },
})

export const { signIn, signUp, signOut, logIn, logOut } = authSlice.actions
export default authSlice.reducer

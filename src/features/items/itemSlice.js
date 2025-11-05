import { createSlice, nanoid } from '@reduxjs/toolkit'

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (values) => {
        return { payload: { id: nanoid(), ...values } }
      },
    },
    editItem: (state, action) => {
      const { id, values } = action.payload
      const index = state.findIndex((item) => item.id === id)
      if (index >= 0) state[index] = { id, ...values }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addItem, editItem, deleteItem } = itemSlice.actions
export default itemSlice.reducer

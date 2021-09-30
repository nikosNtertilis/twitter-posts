import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  status: null,
}

const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    return json; 
  },
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, {payload}) => {
      state.list = payload;
      state.status = 'success'
    },
    [getPosts.rejected]: () => {
      state.status = 'failed'
    }
  },
  
})

export {
  getPosts,
};
export default postsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (userData) => { 
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${userData._id}`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
    const data = await res.json()
    

    if(data.error) {
      throw new Error(data.error)
    } else {
      return data
    }
  }
)


export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        saveUser: (state, action) => {
          return {
            user: action.payload
          } 
        },

        profileUpdated: (state, action) => {
            state.user = action.payload      
        },

        logout: (state, action) => {
            state.user = {}
        }
    }
})


export default userSlice.reducer;
export const { saveUser, profileUpdated, logout } = userSlice.actions;
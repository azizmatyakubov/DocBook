import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'user/registerUser', async ({name, email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const res = await axios.post('/auth/register/doctor', {name, email, password}, config)
            console.log(res)

            
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/login', async ({email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const {data} = await axios.post('/auth/login', {email, password}, config)
            return data
            
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


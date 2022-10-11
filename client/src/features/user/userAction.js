import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'user/registerUser', async ({email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const {data} = await axios.post('/doctors/register', {email, password}, config)
            
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


import {createAsyncThunk,createSlice} from "@reduxjs/toolkit" 
import axiosInstance from "./Helper"
import { reg_end_point } from "../API/Endpoints/Endpoint"
import { log_end_point } from "../API/Endpoints/Endpoint"

const initialState ={
    upload_status: 'idle',
    upload_message: 'idle',
    redirectContact: null,
    userpic:localStorage.getItem("pic") || null,
    redirectTo: null,
    isLoggedIn: false,
    isRegistration: false,
    profile:[{}]
}

export const register = createAsyncThunk("register",
    async(formdata,{rejectWithValue})=>{
        const res = await axiosInstance.post(reg_end_point.registration,formdata)
        if(res.status===200){
            return await res?.data
           }else{
            alert('invalid registration')
            return rejectWithValue()
           }
    }
)

export const logIn = createAsyncThunk("logIn",
    async(formdata,{rejectWithValue})=>{
        const res = await axiosInstance.post(log_end_point.logIn,formdata)
        if(res.status===200){
            return res?.data
           }else{
            alert('invalid login')
            return rejectWithValue()
           }
    }
)

export const profile_details = createAsyncThunk("profile",
    async(formData)=>{
        const res = await axiosInstance.get('/user/profile-details',formData)
        const resData = await res?.data
        return resData
    }
)

export const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        reset_redirectTo: (state, { payload }) => {    
            state.redirectTo = payload;
        },
        check_token: (state, { payload }) => {
            const token = localStorage.getItem("token");
            if (token !== null && token !== undefined) {
                state.isLoggedIn = true;
            }
        },
        handleLoggedout: (state, { payload }) => {
            localStorage.removeItem("token");
            state.isLoggedIn = false;
        },
        reset_redirectContact: (state, { payload }) => {
            state.redirectContact = payload;
        },
        check_myname: (state, { payload }) => {
            const name = localStorage.getItem("name");
            if (name !== null && name !== undefined) {
                state.isRegistration = true;
            }
        },
        handleredirectContact: (state, { payload }) => {
            localStorage.removeItem("name");
            state.isRegistration = false;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state,{payload})=>{
            state.upload_status = "loading"
        })
        .addCase(register.fulfilled,(state,{payload})=>{
            state.upload_status = "success"
            localStorage?.setItem("name",payload?.data.name)
            state.isRegistration = true
            state.redirectContact = "/login"
        })
        .addCase(register.rejected,(state,{payload})=>{
            state.upload_status = "faild"
        })

        .addCase(logIn.pending,(state,{payload})=>{
            state.upload_status = "loading"
        })
        .addCase(logIn.fulfilled,(state,{payload})=>{
            state.upload_status = "idle";
                localStorage?.setItem("token", payload?.token);
                localStorage?.setItem("name", payload?.data?.first_name); 
                // localStorage?.setItem("email", payload?.user?.email); 
                state.userpic = payload?.data?.profile_pic
                 localStorage?.setItem("pic", payload?.data?.profile_pic); 
                state.redirectTo = "/";
                state.isLoggedIn = true;
        })
        .addCase(logIn.rejected,(state,{payload})=>{
            state.upload_status = "faild"
        })
        .addCase(profile_details.pending,(state,{payload})=>{
            state.upload_status = 'loading'
        })
        .addCase(profile_details.fulfilled,(state,{payload})=>{
            state.upload_status = 'success'
            state.profile = payload?.data
        })
        .addCase(profile_details.rejected,(state,{payload})=>{
            state.upload_status = 'faild'
        })
    }
})

export const {
    reset_redirectTo,
    reset_redirectContact,
    check_token,
    check_myname,
    handleLoggedout,
    handleredirectContact,
} = authSlice.actions;
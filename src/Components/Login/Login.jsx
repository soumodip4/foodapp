import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { logIn, reset_redirectContact } from "../../Redux/AuthSlice";
import { Link } from "react-router-dom";
// import {toast,Toaster} from"sonner"

import "./Login.css"
export default function Login() {
    const { redirectTo, redirectContact } = useSelector((s) => s.contents)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const validation = () => {
        let error = {};
        if (!user.email) {
            error.email = "email is required"
        }
        if (!user.password) {
            error.password = "password is required"
        }
        return error
    }
    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        if (name === "email") {
            if (value.trim().length === 0) {
                setUser({ ...user, email: "" })
                setError({ ...error, email: "email can't be empty" })
            }
            else {
                setUser({ ...user, email: value })
                setError({ ...error, email: "" })
            }
        }
        if (name === "password") {
            if (value.trim().length === 0) {
                setUser({ ...user, password: "" })
                setError({ ...error, password: "password can't be empty" })
            }
            else {
                setUser({ ...user, password: value })
                setError({ ...error, password: "" })
            }
        }
    }
    const submit = (e) => {
        e.preventDefault();
        setError(validation())
        let data = {
            "email": user.email,
            "password": user.password
        }
        console.log(data)
        if(data.email!==" " && data.password!==" "){
          dispatch(logIn(data)).then(()=>{
            RedirectUser()
            // toast.success("login succeful")
            
        })
        }
       
        
        
        
    }
    const RedirectUser = () => {
        const token = localStorage.getItem("token");
        const isInLoginPage = window.location.pathname.toLowerCase() === "/login";
        if (token !== null && token !== undefined && token !== "") {
            isInLoginPage && navigate("/")
        }

    }
    // useEffect(() => {
    //     RedirectUser()
    // }, [redirectTo])
    useEffect(() => {
        reset_redirectContact(null)
    }, [redirectContact])
    return (
        <>
        <Box className="main2">
            <Box className="back2">
          
        <Box className="log">
            <Box className="form-group">
                <TextField
                    className="textF2"
                    id="outlined-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => postUserData(e)}
                />
                <span className="error-text">{error?.email}</span>
            </Box>
            <Box className="form-group">
                <TextField
                    className="textF2"
                    id="outlined-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => postUserData(e)}
                />
                <span className="error-text">{error?.password}</span>
            </Box>
            <Button className="submit-button" variant="contained" onClick={submit}>Submit</Button>

            <h3><Link to={'/registration'}> <span className="divert2"> are you register?Register</span></Link></h3>
        </Box>
        </Box>
        </Box>
        {/* <Toaster position="top-right" /> */}
       </>
   
);
}
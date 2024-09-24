import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { register } from "../../Redux/AuthSlice";
import { Link } from "react-router-dom";
import "./Registration.css"
export default function Registration() {
  const { redirectContact } = useSelector((s) => s.contents)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [profile_pic, setProfile_pic] = useState("");
  const [error, setError] = useState();
  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "first name is required";
    }
    if (!user.last_name) {
      error.last_name = "last name is requied";
    }
    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }
    return error;
  };
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.trim().length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "first name can't be empty" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.trim().length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "last name can't be empty" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }
    if (name === "email") {
      if (value.trim().length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "email can't be empty" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.trim().length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password can't be empty" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  }
  const submit = (e) => {
    e.preventDefault();
    setError(validation());
    const formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profile_pic", profile_pic);
    dispatch(register(formData))
  }
  const RedirectUser = () => {
    const name = localStorage.getItem("name");
    const isInContactPage = window.location.pathname.toLowerCase() === "/registration";
    if (name !== null && name !== undefined && name !== "") {
      isInContactPage && navigate("/login")
    }
  }
  useEffect(() => {
    RedirectUser()
  }, [redirectContact])
  return (
    
    <Box className="registration-container">
      <Box className="background-overlay">
    <Box className="registration-form">
      <Box className="form-group">
        <TextField className="form-input" id="outlined-basic" label="First Name" variant="outlined" name="first_name" type="text" value={user.first_name} onChange={(e) => postUserData(e)} />
        <span style={{ color: "red" }}>{error?.first_name}</span>
      </Box>
      <Box className="form-group">
        <TextField className="form-input" id="outlined-basic" label="Last Name" variant="outlined" name="last_name" type="text" value={user.last_name} onChange={(e) => postUserData(e)} />
        <span style={{ color: "red" }}>{error?.last_name}</span>
      </Box>
      <Box className="form-group">
        <TextField className="form-input" id="outlined-basic" label="Email" variant="outlined" name="email" type="email" value={user.email} onChange={(e) => postUserData(e)} />
        <span style={{ color: "red" }}>{error?.email}</span>
      </Box>
      <Box className="form-group">
        <TextField className="form-input" id="outlined-basic" label="Password" variant="outlined" name="password" type="password" value={user.password} onChange={(e) => postUserData(e)} />
        <span style={{ color: "red" }}>{error?.password}</span>
      </Box>
      <Box className="form-group">
        <input className="file-input" type="file" name="profile_pic" accept="/profile_pic*" onChange={(e) => setProfile_pic(e.target.files[0])} />
        
      </Box>
      
      <Button className="submit-button" variant="contained" onClick={submit}>submit</Button>

      <p className="login-redirect"><Link to={'/login'}><span className="redirect-link"> are you register?LogIn</span></Link></p>
 
      </Box>
      </Box>
      </Box>
    
  )
}

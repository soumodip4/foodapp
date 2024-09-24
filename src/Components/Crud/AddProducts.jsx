import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { product_submit, show_product } from "../../Redux/CrudSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import {toast,Toaster} from  "sonner"
import "./AddProducts.css"

export default function AddProducts() {
    const { redirectContact } = useSelector((s) => s.contents)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
      title: "",
      description: "",
    });
    const [image, setimage] = useState("");
    const [error, setError] = useState();
    const validation = () => {
      let error = {};
      if (!user.title) {
        error.title = "title is required";
      }
      if (!user.description) {
        error.description = "description is requied";
      }
      
      return error;
    };
    let name, value;
    const postUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      console.log(value)
      if (name === "title") {
        if (value.trim().length === 0) {
          setUser({ ...user, title: "" });
          setError({ ...error, title: "title can't be empty" });
        } else {
          setUser({ ...user, title: value });
          setError({ ...error, title: "" });
          
        }
      }
      if (name === "description") {
        if (value.trim().lenth === 0) {
          setUser({ ...user, description: "" });
          setError({ ...error, description: "description can't be empty" });
        } else {
          setUser({ ...user, description: value });
          setError({ ...error, description: "" });
        }
      }
     
      
    }
    const submit = (e) => {
      e.preventDefault();
      setError(validation());
      const formData = new FormData();
      formData.append("title", user.title);
      formData.append("description", user.description);
    //   formData.append("email", user.email);
    //   formData.append("password", user.password);
      formData.append("image", image);
      dispatch(product_submit(formData)).then(()=>{
        dispatch(show_product())
        
      })
      // navigate("/showProducts")
      toast.success("order successful")
     
    }
    
    // const RedirectUser = () => {
    //   const name = localStorage.getItem("name");
    // //   const isInContactPage = window.location.pathname.toLowerCase() === "/registration";
    //   if (name !== null && name !== undefined && name !== "") {
    //     isInContactPage && navigate("/")
    //   }
    // }
    // useEffect(() => {
    //   RedirectUser()
    // }, [redirectContact])
    return (
      <>
      <div className="main-div2">
     
      <Box className="add">
      <h2>order your <br /> menu here</h2>
      <Box className="adds">
        <Box className="form-group1">
         
          <TextField className="textA" id="outlined-basic" label="title" variant="outlined" name="title" type="text" value={user.title} onChange={(e) => postUserData(e)} />
          <span style={{ color: "red" }}>{error?.first_name}</span>
        </Box>
        <Box className="form-group1">
          <TextField className="textA" id="outlined-basic" label="description" variant="outlined" name="description" type="text" value={user.description} onChange={(e) => postUserData(e)} />
          <span style={{ color: "red" }}>{error?.last_name}</span>
        </Box>
        {/* <Box className="form-group">
          <TextField className="textF" id="outlined-basic" label="Email" variant="outlined" name="email" type="email" value={user.email} onChange={(e) => postUserData(e)} />
          <span style={{ color: "red" }}>{error?.email}</span>
        </Box>
        <Box className="form-group">
          <TextField className="textF" id="outlined-basic" label="Password" variant="outlined" name="password" type="password" value={user.password} onChange={(e) => postUserData(e)} />
          <span style={{ color: "red" }}>{error?.password}</span>
        </Box> */}
        <Box className="form-group1">
          <input className="textA" type="file" name="image" accept="/image*" onChange={(e) => setimage(e.target.files[0])} />
        </Box>
        <Button variant="contained2" style={{backgroundColor:"#3990ed",color:"white"}} onClick={submit}>submit</Button>
        </Box>
       
        </Box>
      
        </div>
        <Toaster/>
      </>
    )
  }
  

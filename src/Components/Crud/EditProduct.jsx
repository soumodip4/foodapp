// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { Box, Typography, TextField, Button } from "@mui/material";
// import { EditList, EditUser } from "../../Redux/CrudSlice";
// export default function EditProduct() {
//   const dispatch = useDispatch();
//   const navigate=useNavigate();
//   const { id } = useParams();
//   useEffect(() => {
//     dispatch(EditList(id));
//   }, [id]);
//   const {  productData } = useSelector((s) => s.product);
//   const [user, setUser] = useState({

//     title: "",
//     description: "",


//   });
//   const [image, setimage] = useState("");
//   const [error, setError] = useState();
//   const validation = () => {
//     let error = {};

//     if (!user.title) {
//       error.title = "email is title";
//     }
//     if (!user.description) {
//       error.description = "description no. is required";
//     }

//     return error;
//   };
//   let name, value;
//   const postUserData = (e) => {
//     name = e.target.name;
//     value = e.target.value;


//     if (name === "title") {
//       if (value.trim().length === 0) {
//         setUser({ ...user, title: "" });
//         setError({ ...error, title: "title is requred" });
//       } else {
//         setUser({ ...user, title: value });
//         setError({ ...error, title: "" });
//       }
//     }

//     if (name === "description ") {
//       if (value.trim().length === 0) {
//         setUser({ ...user,description : "" });
//         setError({ ...error, description : "description  no is requred" });
//       } else {
//         setUser({ ...user, description : value });
//         setError({ ...error, description : "" });
//       }
//     }



//   };
//   const submit = (e) => {
//     e.preventDefault();
//     setError(validation());
//     const formData = new FormData();
//     formData.append("title", user.title);
//     formData.append("description", user.description);

//     formData.append("image", image);
//     dispatch(EditUser(formData))
//     navigate("/blog")
//   }
//   useEffect(() => {
//     if ( productData !== null) {
//       setUser({
//         email:  productData?.title,
//         phone:  productData?.description,

//       });
//       setimage( productData?.image)
//     }
//   }, [ productData]);
//   return (
//     <>
//       <Box className="add">
//       <Box className="regis">


//         <Box className="form-group">
//           <TextField className="textF" id="outlined-basic" label="title" variant="outlined" name="title" type="text" value={user.title} onChange={(e) => postUserData(e)} />
//           <span style={{ color: "red" }}>{error?.first_name}</span>
//         </Box>

//         <Box className="form-group">
//           <TextField className="textF" id="outlined-basic" label="description" variant="outlined" name="description" type="text" value={user.description} onChange={(e) => postUserData(e)} />
//           <span style={{ color: "red" }}>{error?.last_name}</span>
//         </Box>

//         <Box className="form-group">
//           <input className="textF" type="file" name="image" accept="/image*" onChange={(e) => setimage(e.target.files[0])} />
//         </Box>
//         <Button variant="contained" onClick={submit}>submit</Button>
//         </Box>
//         </Box>
//       </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, updateProduct } from "../../Redux/CrudSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./Edit.css"
const EditProduct = () => {
  const { products } = useSelector((s) => s.product)
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(editProduct(id))
  }, [id])
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState();
  const [imagepreview, setImagepreview] = useState('');
  const handleupload = (e) => {
    setImage(e.target.files[0]);
    setImagepreview(URL.createObjectURL(e.target.files[0]))
  }

  const [error, setError] = useState();

  const validation = () => {
    let error = {};
    if (!product.title) {
      error.title = "title is required";
    }
    if (!product.description) {
      error.description = "description is required";
    }

    return error;
  };

  let name, value;
  const postProductData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.trim().length === 0) {
        setProduct({ ...product, title: "" });
        setError({ ...error, title: "title is required" });
      } else {
        setProduct({ ...product, title: value });
        setError({ ...error, title: "" });
      }
    }

    if (name === "description") {
      if (value.trim().length === 0) {
        setProduct({ ...product, description: "" });
        setError({ ...error, description: "description is required" });
      } else {
        setProduct({ ...product, description: value });
        setError({ ...product, description: "" });
      }
    }
  };

  const submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
     formData.append("image", image);
    if (image) {
      formData.append("image", image);} 
      else {
      formData.append("image", product?.image);
    }
    formData.append("id", id)
    dispatch(updateProduct(formData)).then(()=>{
      navigate("/showProducts")
    });
    
  }
  useEffect(() => {
    if (products !== null) {
      setProduct({
        title: products?.title,
        description: products?.description
      })

      setImagepreview(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${products?.image}`)
      // setImage(products?.image)
    }
  }, [products])
  return (

    <>
     
      <Box className="main2">
        <Box className="regis">

          <Box className="form-group">
            <TextField className="textF" id="outlined-basic" label="title" variant="outlined" name="title" type="text" value={product.title} onChange={(e) => postProductData(e)} />
            {/* <span style={{ color: "red" }}>{error?.title}</span> */}
          </Box>

          <Box className="form-group">
            <TextField className="textF" id="outlined-basic" label="description" variant="outlined" name="description" type="text" value={product.description} onChange={(e) => postProductData(e)} />
            {/* <span style={{ color: "red" }}>{error?.description}</span> */}
          </Box>

          <Box className="form-group">
            <input className="textF" type="file" name="image" accept="/image*" onChange={handleupload} />
          </Box>
          {imagepreview && (
            <Box margin="normal">
              <img src={imagepreview} alt="Product" style={{ width: "50%", maxHeight: "200px", paddingTop: "10px", objectFit: "cover" }} />
            </Box>
          )}
          <Button variant="contained" onClick={submit}>submit</Button>
        </Box>
        </Box>
      
    </>





    //     <>
    // <Box className="edit">
    // <Box className="edit-container">
    //         <Box className="product-form">
    //           <Typography className="edit-heading">Edit Product</Typography>
    //           <Box className="form-group">
    //             <TextField
    //             className="text-field"
    //               id="outlined-basic"
    //               label="Title"
    //               variant="outlined"
    //               name="title"
    //               type="text"
    //               value={product.title}
    //               onChange={(e) => postProductData(e)}
    //             />
    //        <p className="error-message">{error?.title}</p>
    //           </Box>
    //           <Box className="form-group">
    //             <TextField
    //             className="text-field"
    //               id="outlined-basic"
    //               label="Description"
    //               variant="outlined"
    //               name="description"
    //               type="text"
    //               value={product.description}
    //               onChange={(e) => postProductData(e)}
    //             />
    //             <p className="error-message">{error?.description}</p>
    //           </Box>
    //           <Box className="form-group">
    // <TextField
    // className="text-field"
    //        type="file"
    //        name="image"
    //        accept="/image*"
    //        onChange={(e) => setImage(e.target.files[0])}
    // />
    //           </Box>
    //           <Button className="button" variant="contained" onClick={submit}>
    //             submit
    //           </Button>
    //         </Box>
    //       </Box>
    // </Box>
    //     </>
  );
};

export default EditProduct;

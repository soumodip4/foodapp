import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Menu from "../Components/Menu/Menu";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import ProfileD from "../Components/profile/Profile";
import Header from "../ShareModules/Header/Header";
import Footer from "../ShareModules/Footer/Footer";
// import Footer2 from "../ShareModules/Footer/Footer2";
import Registration from "../Components/Registration/Registration";
import Login from "../Components/Login/Login";
import EditProduct from "../Components/Crud/EditProduct";
import ShowProducts from "../Components/Crud/ShowProducts";
// import { lazy } from "react";
import { useDispatch } from "react-redux";
import { check_token,check_myname } from "../Redux/AuthSlice";
import { Component, useEffect } from "react";

// const Home = lazy(()=> import("../Components/Home/Home"))
// const Blog = lazy(()=> import("../Components/Blog/Blog"))
// const About = lazy(()=> import("../Components/About/About"))
// const Registration = lazy(()=> import("../Components/Registration/Registration"))
// const Login = lazy(()=> import("../Components/Login/Login"))


export default function Rout() {
    const dispatch = useDispatch()
    const publicRouteName = [
        {
            path: "/registration",
            Component: <Registration/>
        },
        {
            path: "/login",
            Component: <Login/>
        }
    ];

    const PrivateRoutesName = [
        {
            path:"/",
            Component: <Home/> 
        },
        {
            path:"/about",
            Component: <About/> 
        },
        {
            path:"/menu",
            Component: <Menu/> 
        },
        {
            path:"/blog",
            Component: <Blog/> 
        },
        {
            path:"/contact",
            Component: <Contact/> 
        },
        {
            path:"/Edit/:id",
            Component: <EditProduct/> 
        },
        {
            path:"/showProducts",
            Component: <ShowProducts/>
        },
        {
            path:"/profile",
            Component: <ProfileD/>
        }
    ]
    useEffect(()=>{
        dispatch(check_token())
    },[])

    useEffect(()=>{
   dispatch(check_myname())
    },[])

    function PrivateRoute({children}) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        return token !== null && token !== undefined ? (children) :(<Navigate to = "/login"/>);
    }


    return (
        <>
            
                <Router>

                    <Header />

                    <Routes>

                        {publicRouteName?.map((route,index)=>{
                            return (
                                <Route key={index +1}
                                    exact path={route.path} element={route.Component}>
                                </Route>
                            )
                        })}

                        {PrivateRoutesName?.map((route,index)=>{
                            return(
                                <Route key={index + 2}
                                path={route.path}
                                element={<PrivateRoute>{route.Component}</PrivateRoute>} />
                            )
                        })}

                        {/* <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/content" element={<Content />} />
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/login' element={<Login/>}/> */}

                    </Routes>

                    <Footer/>

                </Router>

            
        </>
    )
}


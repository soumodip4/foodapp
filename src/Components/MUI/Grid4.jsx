import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import "./Grid4.css"
import Aos from "aos";

const MyGrid4 = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <div className="main-div">
            <div className="sub-main">
        <Grid container className="grid4" >
            {/* On small screens, each item takes full width */}
            <Grid className="sub-grid" item xs={12} sm={12} md={4}>

            <div  className="plate1 plate" >
                <img className="rotate linear infinite" src="images/plate1.jpg" alt="" />
                <h2 data-aos="zoom-in-up">Paella Tomato</h2>
                <p data-aos="zoom-in-up">Aliquam ajusto tincidunt, temp leo sit <br /> amet, molestie enim.</p>

                    <Button data-aos="flip-up" className="Explore3">Explore</Button>
                </div>



            </Grid>

            
            <Grid className="sub-grid" item xs={12} sm={12} md={4}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div data-aos="zoom-in-up" className="plate2 plate" >
                     <img className="rotate linear infinite" src="images/plate2.jpg" alt="" />
                     <h2>Appetizer Platter</h2>
                     <p>Aliquam ajusto tincidunt, temp leo sit <br /> amet, molestie enim.</p>
                     <Button className="Explore3">Explore</Button>
                    {/* <img src="images/bigchiken.jpg" alt="" /> */}
                </div>
            </Grid>

            
            
            <Grid className="sub-grid" item xs={12} sm={12} md={4}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div  className="plate3 plate">
                    
                <img  className="rotate linear infinite" src="images/plate3.jpg" alt=""  />
                <h2 data-aos="zoom-in-up">Burrata Salad</h2>
                <p data-aos="zoom-in-up">Aliquam ajusto tincidunt, temp leo sit <br /> amet, molestie enim.</p>
                <Button data-aos="flip-up" className="Explore3">Explore</Button>
                </div>
            </Grid>
        </Grid>
        </div>
        </div>
    );
};

export default MyGrid4;

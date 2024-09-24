import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import "./Grid3.css"
import Aos from "aos";

const MyGrid3 = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <Grid container className="grid3" >
            {/* On small screens, each item takes full width */}
            <Grid  data-aos="fade-up" className="sub-grid" item xs={12} sm={12} md={4}>

            <div className="Food1" >
                <h3>LOADED CHEESE</h3>
                <h2>Delicious <br /> Burger</h2>
                    {/* <img src="images/bigburger.jpg" style={{height:100}} alt="" /> */}
                    <Button className="table">Book A Table</Button>
                </div>



            </Grid>

            
            <Grid className="sub-grid" item xs={12} sm={12} md={4}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div data-aos="flip-right" className="Food2" >
                    <h2>UPCOMING <br /> FOOD EVENTS</h2>
                    <Button className="events">EXPLORE ALL EVENTS</Button>
                    {/* <img src="images/bigchiken.jpg" alt="" /> */}
                </div>
            </Grid>

            
            
            <Grid  data-aos="fade-down" className="sub-grid" item xs={12} sm={12} md={4}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div className="Food3">
                    <h3>BARBEQUE LOVER</h3>
                    <h2>Barbeque <br /> Festival</h2>
                    {/* <img src="images/lambbarbeque.jpg" alt="" /> */}
                </div>
            </Grid>
        </Grid>
    );
};

export default MyGrid3;

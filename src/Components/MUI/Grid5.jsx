import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import "./Grid5.css"
import { Link } from "react-router-dom";
import Aos from "aos";
const MyGrid5 = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <Grid  container className="grid5" >
            {/* On small screens, each item takes full width */}
            <Grid data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="sub-grid" item xs={12} sm={4}md={4}>

            <div className="Table1" >
               <img src="images/Table.jpg" alt="" />
                </div>



            </Grid>

            
            <Grid className="sub-grid" item xs={12} sm={4}md={4}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div data-aos="zoom-out" className="Table2" >
                    <h2>Book</h2>
                    <h3>Your Table</h3>
                    <h4>NOW, Before it get filled first</h4>

                </div>
            </Grid>

            
            
            <Grid className="sub-grid" item xs={12} sm={4}md={4}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="Table3">
                   <Link to={"/menu"}>
                 <Button className="reservation">Order <br /> your menu</Button>
                 </Link>    
                
                    
                   
                </div>
            </Grid>
        </Grid>
    );
};

export default MyGrid5;

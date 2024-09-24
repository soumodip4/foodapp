import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import './Grid6.css'
import Aos from "aos";

const MyGrid6 = () => {
    

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    
    return (
        <div>
            <div className="services">
                <h3>Our Services</h3>
                <h2>Our Restaurant <br /> Amenities</h2>
                </div>
        <Grid container  className="grid6" >
            
            {/* On small screens, each item takes full width */}
            <Grid data-aos="flip-right" className="sub-grid" item xs={12} sm={6}md={3}>

            <div className="card1  amenities" >
                <img src="images/card1.jpg" alt="" />
               <h2>Significant Bar</h2>
               <p>Aliquam ajusto tincid <br /> templeo sit amet.</p>
                </div>



            </Grid>

            
            <Grid data-aos="flip-left" className="sub-grid" item xs={12} sm={6}md={3}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div className="card2 amenities" >
                <img src="images/card2.jpg" alt="" />
               <h2>Wonderful Cuisine</h2>
               <p>Aliquam ajusto tincid <br /> templeo sit amet.</p>

                </div>
            </Grid>

            
            
            <Grid data-aos="flip-left" className="sub-grid" item xs={12} sm={6}md={3}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div className="card3 amenities">
                <img src="images/card3.jpg" alt="" />
               <h2>Classic Restaurant</h2>
               <p>Aliquam ajusto tincid <br /> templeo sit amet.</p>
                </div>
            </Grid>

            <Grid data-aos="flip-right" className="sub-grid" item xs={12} sm={6}md={3}>
                {/* Content for the second column */}
                
                
                {/* Content for the first column */}
                <div className="card4 amenities">
                <img src="images/card4.jpg" alt="" />
               <h2>Best Chefs</h2>
               <p>Aliquam ajusto tincid <br /> templeo sit amet.</p>
                </div>
            </Grid>
        </Grid>
        </div>
    );
};

export default MyGrid6;

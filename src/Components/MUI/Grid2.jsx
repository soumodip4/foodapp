import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Grid2.css'
import Aos from "aos";

const MyGrid2 = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <Grid container className="grid2" >
            {/* On small screens, each item takes full width */}
            <Grid item xs={12} sm={12} md={6}>

                <div className="grid2-text" >
                    <h2><span>Chef Message</span> <br />
                        We are doing more <br /> than you expect</h2>

                    <p>Proin feugiat diam vitae ligul imperd dapibus vest <br /> ibul tellus libero, at fermentum mi euismodut. Viva <br />
                        lroin feugiat diam vitae ligul imperd dapibus veste <br /> buli tellus libero, at fermentum.</p>
                    <div className="sub-images">
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" className="small-images"><img src="images/burger.jpg" alt="" /></div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic" className="small-images"><img src="images/barbeque.jpg" alt="" /></div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic" className="small-images"> <img src="images/Drinks.jpg" alt="" /> <br /></div>
                    </div>


                    <Button data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" className="expo-menu">
                        EXPLORE OUR MENU <span className="che"><ChevronRightIcon /></span>
                    </Button>
                </div>



            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                {/* Content for the second column */}


                {/* Content for the first column */}
                <div className="grid2-images">
                    <div className="back-circule"></div>
                    <img data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" src="images/chef.jpg" alt="" />
                </div>
            </Grid>
        </Grid>
    );
};

export default MyGrid2;

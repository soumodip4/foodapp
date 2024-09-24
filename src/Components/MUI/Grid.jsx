import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import { Button } from "@mui/material";
import Aos from "aos";

import "./Grid.css"
const MyGrid = () => {

    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);
    return (
        <Grid container  className="grid1" 
        >
            {/* On small screens, each item takes full width */}
            <Grid className="sub-grid" item xs={12} sm={12} md={6}>
                {/* Content for the first column */}
                <div className="sub-grid-div" >
                    <img data-aos="fade-right" src="images/leftside.jpg" alt="" />
                </div>
            </Grid>
            <Grid item xs={12} sm={12}md={6}>
                {/* Content for the second column */}
                <div className="sub-grid-text">
                    <h2>Enjoy An Exceptional <br /> Journey of Taste</h2>
                    <p >Proin feugiat diam vitae ligul imperd dapibus vest <br /> ibul tellus libero, at fermentum mi euismodut. Viva <br /> 
                    lroin feugiat diam vitae ligul imperd dapibus veste <br /> buli tellus libero, at fermentum.</p>
                    <h4><span><FileDownloadDoneIcon /></span> Fresh Ingredients</h4>
                    <h4> <span><FileDownloadDoneIcon /></span> Best Recipe</h4>
                    <h4> <span><FileDownloadDoneIcon /></span> Happy Clients</h4>
                    <h4> <span><FileDownloadDoneIcon /></span> BVegan Menu</h4>
                    <Button className="explore">
                        explore
                    </Button>
                </div>
                
            </Grid>
        </Grid>
    );
};

export default MyGrid;

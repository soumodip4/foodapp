import React from 'react'
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ManIcon from '@mui/icons-material/Man';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './Blog.css'

const Blog = () => {
  return (
    <>
<div className="banner1">
  <h1>BLOG</h1>
</div>

    <div className='main-blog'>
       <Grid container  className="grid7 first" >
           
            <Grid className="Blog" item xs={12} sm={12} md={4}>
               
                <div className="sub-blog" >
                    <img src="images/post1.jpg" alt="" />
                </div>
            </Grid>
            <Grid item xs={12} sm={12}md={8}>
              
                <div className="sub-blog-text">
                    <h2>Accumsan Nonsed PretiumPorta Ultricies.</h2>
                    <div className='icons'><h4><span><CalendarMonthIcon/></span>eptember 1, 2023</h4>
                    <h4><span><ManIcon /></span>restara3</h4>
                    <h4><span><MenuIcon/></span>Uncategorized</h4>
                    <h4><span><ChatBubbleIcon/></span>Off</h4></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry’s standard dummy...</p>
                    
                    
                </div>
                
            </Grid>

            
        </Grid>

        <Grid container  className="grid7" >
           
           <Grid className="Blog" item xs={12} sm={12} md={4}>
              
               <div className="sub-blog" >
                   <img src="images/post2.jpg" alt="" />
               </div>
           </Grid>
           <Grid item xs={12} sm={12}md={8}>
             
               <div className="sub-blog-text">
                   <h2>Accumsan Nonsed PretiumPorta Ultricies.</h2>
                   <div className='icons'><h4><span><CalendarMonthIcon/></span>eptember 1, 2023</h4>
                   <h4><span><ManIcon /></span>restara3</h4>
                   <h4><span><MenuIcon/></span>Uncategorized</h4>
                   <h4><span><ChatBubbleIcon/></span>Off</h4></div>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry’s standard dummy...</p>
                   
                   
               </div>
               
           </Grid>

           
       </Grid>


       <Grid container  className="grid7 last" >
           
           <Grid className="Blog" item xs={12} sm={12} md={4}>
              
               <div className="sub-blog" >
                   <img src="images/post3.jpg" alt="" />
               </div>
           </Grid>
           <Grid item xs={12} sm={12}md={8}>
             
               <div className="sub-blog-text">
                   <h2>Accumsan Nonsed PretiumPorta Ultricies.</h2>
                   <div className='icons'><h4><span><CalendarMonthIcon/></span>eptember 1, 2023</h4>
                   <h4><span><ManIcon /></span>restara3</h4>
                   <h4><span><MenuIcon/></span>Uncategorized</h4>
                   <h4><span><ChatBubbleIcon/></span>Off</h4></div>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry’s standard dummy...</p>
                   
                   
               </div>
               
           </Grid>

           
       </Grid>

    </div>
    </>
  )
}

export default Blog

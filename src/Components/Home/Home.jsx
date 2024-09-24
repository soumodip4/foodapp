import React from 'react'
import Carousel from '../Carousel/Carousel'
import MyGrid from '../MUI/Grid'
import MyGrid2 from '../MUI/Grid2'
import MyGrid3 from '../MUI/Grid3'

import Slider from '../Slider/Slider'
import MyGrid4 from '../MUI/Grid4'
import MyGrid5 from '../MUI/Grid5'
import MyGrid6 from '../MUI/Grid6'
import Plate from '../Plate/Plate'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Carousel/>
     
       <MyGrid/>
       <Slider/>
     
    
     <MyGrid2/>
       <MyGrid3/>
      <MyGrid4/>
     <MyGrid5/>
      <MyGrid6/> 
      <Plate/>
      {/* <Card2/> */}
    </div>
  )
}

export default Home

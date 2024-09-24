import React, { useEffect } from 'react'

import "./Menu.css"
import MyGrid4 from '../MUI/Grid4'
import AddProducts from '../Crud/AddProducts'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Plate from '../Plate/Plate'
import AllMenu from '../AllMenu/AllMenu'


const Menu = () => {
    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);
  return (
    <>
<div className="banner" >
  <h1>Menu</h1>
</div>
<Plate/>
{/* 
<div className='main-image'  >
<h2>COOKING</h2>
    <img src="images/big-rammen.jpg" alt="" data-aos="fade-down" />
    

</div> */}
<MyGrid4/>
<AddProducts/>
<AllMenu/>

    </>
  )
}

export default Menu

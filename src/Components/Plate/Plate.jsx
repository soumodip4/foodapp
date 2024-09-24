import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import "./Plate.css"

const Plate = () => {

    

    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);
  return (
    <div className='main-pos'>
    <div className='main-image'  >
<h2>COOKING</h2>
    {/* <img src="images/big-rammen.jpg" alt="" data-aos="fade-down" /> */}
    

</div>
</div>
  )
}

export default Plate

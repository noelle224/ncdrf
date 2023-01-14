import React, {useState} from 'react'
import './Slider.css'
import slider1 from './slider1.jpg'
import slider5 from './slider2.avif'
import slider6 from './slider3.avif'


function Slider() {

    const[index, setIndex] = useState(0)

    const sliderarray = [slider1,slider5,slider6];

    const slideright = () => {
            setIndex(index+1);
    }

    const timer = setTimeout(() => {
        slideright();
      }, 4000);



  return (
    <div className='Slider__slide'>
    <div className='Slider__slider'>
    <img 
    src={sliderarray[(index)%3]}
    className='imgslider'
    /> 
    
    <img
    className='Slider__slider_right'
    src='https://cdn-icons-png.flaticon.com/512/189/189297.png'
    onClick={slideright}
    />
    </div>
    <p className='Introduction'>THIS IS OUR PRODUCT WEBSITE</p>
    </div>
  )
}

export default Slider
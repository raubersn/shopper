import React from 'react'
import './Hello.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hello_image from '../Assets/hello_image.png'

const Hello = () => {
  return (
    <div className='hello'>
      <div className='hello-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hello-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt='' />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hello-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='hello-right'>
        <img src={hello_image} alt="" />
      </div>
    </div>
  )
}

export default Hello;
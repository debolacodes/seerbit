import React from 'react';

export default function Header(props) {
  return (
    <div className='header' >
      <div className='headerSocialLinks'>Follow - 
        <a href="facebook.com/fifthandluxe"> Fb.</a> / 
        <a href="twitter.com/fifthandluxe"> Tw. </a> / 
        <a href="linkedIn.com/fifthandluxe"> In. </a>
      </div>
      <div className='headerLogo'></div>
      <div className='headerOptions'>
        <input className='headerSearch' 
          placeholder='Search' onChange={(e)=>{props.setSearchText(e.target.value)}}/>
        <div className='headerIconButton'>
          <div className='IconBlur'></div>
          <div className='inner searchIcon'></div>
        </div>
        <div className='headerIconButton'>
          <div className='IconBlur'></div>
          <div className='inner bagIcon'></div>
          <div className='bagCount'>{props.numberInCart}</div>
        </div>
        

      </div>
    </div>
  
  )}

import React from 'react';
import Parallax from 'react-rellax';

const Header = () => {
  return (
    <div className='header'>
      <Parallax speed={0}>
        <img
          src='/img/BG-4.png'
          id='bg3'
          className='landing-background'
          alt=''
        />
      </Parallax>

      <Parallax speed={1}>
        <img
          src='/img/BG-3.png'
          id='bg3'
          className='landing-background'
          alt=''
        />
      </Parallax>

      <Parallax speed={3}>
        <img
          src='/img/BG-2.png'
          id='bg2'
          className='landing-background'
          alt=''
        />
      </Parallax>

      <Parallax speed={6}>
        <img
          src='/img/BG-1.png'
          id='bg1'
          className='landing-background'
          alt=''
        />
      </Parallax>
    </div>
  );
};

export default Header;

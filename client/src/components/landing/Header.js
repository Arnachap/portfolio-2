import React from 'react';
import Parallax from 'react-rellax';

const Header = () => {
  return (
    <div>
      <img src='/img/BG-4.jpg' id='bg4' className='bg' alt='' />

      <Parallax speed={1}>
        <img src='/img/BG-3.png' id='bg3' className='bg' alt='' />
        <h1>Arnaud Chapeleur</h1>
      </Parallax>

      <Parallax speed={3}>
        <img src='/img/BG-22.png' id='bg2' className='bg' alt='' />
      </Parallax>

      <Parallax speed={5}>
        <img src='/img/BG-1.png' id='bg1' className='bg' alt='' />
      </Parallax>
    </div>
  );
};

export default Header;

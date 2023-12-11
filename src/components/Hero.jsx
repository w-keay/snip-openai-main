import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    // Header section
    <header className='w-full flex justify-center items-center flex-col'>
      {/* Navigation bar */}
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* Snip logo */}
        <img src={logo} alt='snip_logo' className='w-28 object-contain' />

        {/* GitHub button */}
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/w-keay", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      {/* Main headline */}
      <h1 className='head_text'>
        Snip Down <span className='red_gradient '>ANY</span> Article with <br className='max-md:hidden' />
        <span className='red_gradient '>OpenAI GPT-4</span>
      </h1>
      {/* Subtitle/description */}
      <h2 className='desc'>
        Save time reading with snip, an open-source article snipping tool
        that shortens lengthy articles into bite-size summaries
      </h2>
    </header>
  );
};

export default Hero;

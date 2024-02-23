import { LuRefreshCcw } from "react-icons/lu";
import React, { useState } from 'react';

const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Captcha = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState('');
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false);

  const refreshCaptcha = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setCaptcha(generateCaptcha());
    setInputValue('');
    setIsCaptchaCorrect(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.toLowerCase() === captcha.toLowerCase()) {
      setIsCaptchaCorrect(true);
    } else {
      setIsCaptchaCorrect(false);
    }
  };

  return (
    <>
    <div>
      {/* <p>Please enter the CAPTCHA code:</p> */}
      <div className='d-flex w-100 gap-3 d-flex align-items-center'>
    <div className="" >
        <input type="text" placeholder='Please enter the CAPTCHA code :' value={inputValue} onChange={handleInputChange} className='inputit w-100 form-control pe-3 mt-3 ' style={{marginLeft : "12px" , width : "160%" }}/>
        </div>
        <button onClick={refreshCaptcha} className="mt-3"><LuRefreshCcw/></button>
      </div>
      <p className="ms-3">{captcha}</p>
     {isCaptchaCorrect ? <p style={{ color: 'green' }}>Captcha correct!</p> : null}
    </div>
   
    </>
  );
};

export default Captcha;

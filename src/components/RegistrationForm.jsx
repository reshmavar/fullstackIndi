


import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    const templateParams = {
      to_email: email,
      otp: otp,
    };

    emailjs.send('service_55h2fdl', 'template_izrv2jj', templateParams, 'kBdn-_RTXmT5xjqUt')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsOtpSent(true);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setIsOtpVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP, please try again.');
    }
  };

  return (
    <div>
      {!isOtpSent && (
        <div>
          <h2>Registration Form</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}
      {isOtpSent && !isOtpVerified && (
        <div>
          <h2>Verify OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
      {isOtpVerified && <h2>OTP verified! You can now proceed with registration.</h2>}
    </div>
  );
};


export default RegistrationForm;
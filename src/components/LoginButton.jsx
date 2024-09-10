import React from 'react';

const LoginButton = ({ text, isSocial = false, onClick }) => {
  const className = isSocial ? 'social-login-button' : 'login-button';
  return (
    <div>
      <button className={className} type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default LoginButton;

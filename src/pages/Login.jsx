import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <div className="login-form">
        <InputField type={'이메일'} placeholder={'email'} />

        <InputField type={'비밀번호'} placeholder={'password'} />

        <LoginButton
          text={'로그인'}
          onClick={() => console.log('로그인 클릭')}
        />
        <p className="signup-link">
          계정이 없으신가요?
          <a href="#"> 가입하기</a>
        </p>
        <p className="or-divider">or</p>
        <LoginButton
          text={'Continue with Google'}
          onClick={() => console.log('소셜버튼 클릭')}
          isSocial={true}
        />
      </div>
    </div>
  );
};

export default Login;

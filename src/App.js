import { findAllByTestId } from '@testing-library/react';

function App() {
  //logic
  console.log('app.js');

  //   const name = '후츠릿';
  //   const age = 34;

  //   const greetingMessage = `안녕하세요.${name}님! 나이가${age}세이시네요
  // 환영합니다`;

  //   console.log('🚀 ~ App ~ greetingMessage:', greetingMessage);

  /**
   * Logical operators
   * 단축 평가 논리 계산법
   */

  const user = {
    isLoggedIn: true,
    role: 'admin',
  };
  // if (user.isLoggedIn && user.role === 'admin') {
  //   console.log('관리자 페이지에 접근이 가능합니다');
  // } else {
  //   console.log('관리자 페이지에 접근이 불가능합니다');
  // }

  if (!user.isLoggedIn || user.role !== 'admin') {
    console.log('관리자 페이지에 접근이 가능합니다');
  } else {
    console.log('관리자 페이지에 접근이 불가능합니다');
  }

  const user2 = {
    id: 'dasom222g',
    password: 'password',
    isLoggedIn: false,
  };
  if (user2.id === 'dasom222g' && user2.password === 'password') {
    user2.isLoggedIn = true;
    console.log('관리자 페이지에 접근이 가능합니다');
    // if (userInput) {
    //   // 사용자 입력값이 있는 경우, if안에 if문 계속 추가 가능
    // } else {
    //   // 사용자 입력값이 없는 경우
    // }
  }

  // const user = {
  //   isLoggedIn: '',
  // };
  // if (!user.isLoggedIn) {
  //   console.log('관리자 페이지에 접근이 가능합니다');
  // }

  //view
  return <div>Hello World</div>;
}

export default App;

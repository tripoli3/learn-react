import Counter from './components/Counter';
import Card from './components/Card';
import { useState } from 'react';
import Login from './pages/Login';

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

  //Default parameter
  // 함수 정의
  const greeting = (input = '고객') => {
    return `${input}님, 반갑습니다!`;
  };

  // 함수 호출
  greeting('김현호');
  console.log('greeting', greeting('나미'));

  // 배열 구조분해 할당
  const clothList = ['tshirt', '반바지'];
  const [firstCloth, secondCloth, thirdCloth = 'shirt'] = clothList;

  const addCloth = () => {
    const addClothList = [...clothList, '코트'];
    console.log('🚀 ~ App ~ addClothListClothList:', addClothList);
  };

  addCloth();

  console.log('🚀 ~ App ~ firstCloth:', firstCloth);
  console.log('🚀 ~ App ~ secondCloth:', secondCloth);
  console.log('🚀 ~ App ~ thirdCloth:', thirdCloth);

  // 객체 구조분해 할당
  const person = {
    name: '후츠릿',
    age: 34,
    email: 'chutzrit@gmail.com',
  };

  // <원래함수>
  // const name = person.name;
  // const age = person.age;
  // const email = person.email;

  const { name: personName, age, email } = person;
  console.log('🚀 ~ App ~ name:', personName);
  console.log('🚀 ~ App ~ age:', age);
  console.log('🚀 ~ App ~ email:', email);

  //name값 변경
  const addName = () => {
    const addNameList = { ...person, name: '정세헌' };
    console.log('🚀 ~ addName ~ addNameList:', addNameList);
  };

  addName();

  // cosnt addStudent =() =>{
  //   studentList.push('장현재')
  // }

  const [title, setTitle] = useState('초기타이틀');

  const handleClick = () => {
    window.location.href = 'https://www.naver.com/';
  };

  //view
  return (
    <>
      <div className="app">
        {/* <Card
          title={title}
          subText="후츠릿 짱"
          onCardButtonClick={handleClick}
        />
        <Card
          title="초대장"
          subText="초대합니다"
          onCardButtonClick={handleClick}
        />
        <button type="button" onClick={() => setTitle('변경했습니다')}>
          title변경
        </button> */}
        {/* <Login /> */}
        <Counter />
      </div>
    </>
  );
}

export default App;

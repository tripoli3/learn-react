import Counter from './components/Counter';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import ThemeButton from './components/ThemeButton';

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

  // 모드 변경 논리
  /**
  1. ThemeButton에 온클릭 이벤트를 만든다
  2. 버튼이 눌려졌다는 이벤트를 부모 컴포넌트에 전송한다.(onTheme)
  3. 부모 컴포넌트가 이벤트를 받으면 div 클래스를 변환하는 함수를 생성한다.(handleTheme)
  4. [state] isDarkMode라는 state를 생성한다.
  5. isDarkMode state에 따라 wrap클래스가 있는 div에 className의 속성을 다르게 넣어준다.
  5-1.다크모드인 경우엔 'dark-mode'라는 클래스를 준다.
  5-2. 다크모드가 아닌 경우엔 'light-mode'라는 클래스를 준다.
  6. handleTheme함수에서 isDarkMode의 값을 토글로 변경해준다.
  7. ThemeButton컴포넌트에 isDarkMode라는 props를 내려준다.
  7-1. 이 props에는 isDarkMode의 값을 넣어준다.
  8. ThemeButton컴포넌트에 isDarkMode의 값을 받아서 true인 경우엔 '다크 모드' false인 경우엔 '라이트 모드'라는 텍스트를 UI에 보여준다.

  9. 버튼을 클릭한다.
  10. 작동이 잘 되는지 바뀌는걸 확인한다.
   */

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isLoggedIn] = useState(true);

  const [message] = useState([
    {
      id: 1,
      text: '첫번째 메세지',
    },
  ]);

  useEffect(() => {
    console.log(isDarkMode ? '다크모드' : '라이트모드');
    alert(isDarkMode ? '다크모드' : '라이트모드');
  }, [isDarkMode]);

  //view
  return (
    <>
      <div className={`wrap ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Card
          title={title}
          subText="후츠릿 짱"
          onCardButtonClick={handleClick}
        />
        <Card
          title="초대장"
          subText="초대합니다"
          onCardButtonClick={handleClick}
        />
        <ThemeButton isDarkMode={isDarkMode} onTheme={handleTheme} />
        {/* <button type="buttosn" onClick={() => setTitle('변경했습니다')}>
          title변경
        </button> */}
        {/* <Login /> */}
        {/* <Counter /> */}
        {isLoggedIn ? <h2>환영합니다</h2> : <h2>로그인해주세요</h2>};
        {message.length && (
          <h2>새로운 메세지가 {message.length} 개 있습니다</h2>
        )}
      </div>
    </>
  );
}

export default App;

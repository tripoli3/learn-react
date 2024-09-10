import React from 'react';
import CardButton from './CardButton';

const Card = ({ title, subText, onCardButtonClick }) => {
  //logic
  // const subText = '카드 서브 텍스트입니다';
  // const subText2 = '정세헌 카드타이틀';
  const className = 'chutzrit';
  const handleClick = () => {
    console.log('click2');
    onCardButtonClick();
  };
  //view

  return (
    <div className="card">
      <h5 classNme="card-title">{title}</h5>
      <p className={className}>{subText}</p>
      {/* <button type="button" className="card-button">
        Go somewhere
      </button> */}
      <CardButton onCardButtonClick={handleClick} />
    </div>
  );
};

export default Card;

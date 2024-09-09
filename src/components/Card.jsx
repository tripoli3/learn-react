import React from 'react';

const Card = () => {
  //logic
  const subText = '카드 서브 텍스트입니다';
  const subText2 = '정세헌 카드타이틀';
  const className = 'chutzrit';
  //view

  return (
    <div className="card">
      <h5 classNme="card-title">{subText2}</h5>
      <p className={className}>{subText}</p>
      <button type="button" className="card-button">
        Go somewhere
      </button>
    </div>
  );
};

export default Card;

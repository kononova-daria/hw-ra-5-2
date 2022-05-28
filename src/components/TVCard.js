import React from 'react';
import Title from './Title';

//Компонент для отображения карточки c телепрограммой

function TVCard(props) {
  return (
    <div className="tv-container card">
      <Title link={props.tv.link} name={props.tv.name}/>
      <div className="tv-list-container container">
        <ul className="tv-list">{props.tv.items.map((item, index) => {
          return (
            <li key={index} className="tv-item">
              <a href={item.link}>{item.time} {item.name}</a>
              <span className="tv-channel">{item.channel}</span>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
}

export default TVCard;
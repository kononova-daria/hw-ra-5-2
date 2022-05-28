import React from 'react';
import Title from './Title';

//Компонент для отображения карточки c посещаемым

function VisitedCard(props) {
  return (
    <div className="visited-container card">
      <Title link={props.visited.link} name={props.visited.name}/>
      <div className="visited-list-container container">
        <ul className="visited-list">{props.visited.items.map((item, index) => {
          return (
            <li key={index} className="visited-item">
              <a href={item.link}>{item.name}</a>
              <span className="visited-channel"> - {item.text}</span>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
}

export default VisitedCard;
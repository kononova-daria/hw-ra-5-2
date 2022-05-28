import React from 'react';
import Title from './Title';

//Компонент для отображения категорий

function Tags(props) {
  return (
    <div className="title-container container">
        <ul className="title-list">{props.titles.map((item, index) => {
            return <li key={index} className="title-item"><Title {...item}/></li>
        })}</ul>
        {props.children}
    </div>
  );
}

export default Tags;
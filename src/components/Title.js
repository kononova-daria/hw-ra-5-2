import React from 'react';

//Компонент для заголовков

function Title(props) {
  return <a href={props.link}>{props.name}</a>
}

export default Title;
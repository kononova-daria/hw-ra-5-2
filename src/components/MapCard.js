import React from 'react';
import Title from './Title';

//Компонент для отображения карточки c картой

function MapCard(props) {
  return (
    <div className="map-container card">
      <Title link={props.map.link} name={props.map.name}/>
      <p className="text-card">{props.map.text}</p>
    </div>
  );
}

export default MapCard;
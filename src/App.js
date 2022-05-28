import './App.css';
import options from './components/const/forDate';
import Tags from './components/Tags';
import News from './components/News';
import Quotes from './components/Quotes';
import CardImage from './components/CardImage';
import Search from './components/Search';
import Advertisement from './components/Advertisement';
import WeatherCard from './components/WeatherCard';
import MapCard from './components/MapCard';
import BroadcastCard from './components/BroadcastCard';
import VisitedCard from './components/VisitedCard';
import TVCard from './components/TVCard';

function App(props) {
  const date = new Date();

  return (
    <div className="main-page">
        <div className="news-container">
          <div>
            <Tags titles={props.newsTags}>
              <div className="news-date">
                <span>{date.toLocaleString('ru', options)}</span>
              </div>
            </Tags>
            <News news={props.news}/>
            <Quotes quotes={props.quotes}/>
          </div>
          <div>
            <CardImage information={props.information}/>
          </div>
        </div>
        <div className="search-container container">
          <Tags titles={props.searchTags}/>
          <Search/>
          <div className="comment-container"><span>{props.searchComment}</span></div>
        </div>
        <div className="advertisement-container container">
          <Advertisement advertisement={props.advertisement}/>
        </div>
        <div className="cards-container container">
          <WeatherCard weather={props.weather}/>
          <MapCard map={props.map}/>
          <BroadcastCard broadcast={props.broadcast}/>
          <VisitedCard visited={props.visited}/>
          <TVCard tv={props.tv}/>
        </div>
    </div>
  );
}

export default App;

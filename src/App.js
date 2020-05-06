import React, {Component} from 'react';
import Gladiator from './Gladiator.jpg';
import LOTR from './LOTR.jpg';
import PulpFiction from './Pulp Fiction.jpg';
import StarWars from './Star Wars.jpg';
import Terminator from './Terminator.jpg';
import TopGun from './Top Gun.jpg';
import './App.css';

/* function Movie(props) {
  return (
  <div>
    <h3>{props.title} (score: {props.score}) </h3>;
    <img src={props.picture}/>;
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Movies</h1>
      <b></b><b></b><b></b>
      <div className="poster">
      <Movie title="Gladiator" picture={Gladiator} score="10.1" alt="Gladiator"/>
      <Movie title="Lord of the Rings" picture={LOTR} alt="Lord of the Rings"/>
      </div>
      <div className="poster">
      <Movie title="PulpFiction" picture={PulpFiction} alt="Pulp Fiction"/>
      <Movie title="Staw Wars" picture={StarWars} alt="Star Wars"/>
      </div>
      <div className="poster">
      <Movie title="The Terminator" picture={Terminator} alt="The Terminator"/>
      <Movie title="Top Gun" picture={TopGun} alt="Top Gun"/>
          </div>
        </div>
  );
} */


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
          <h1>Gladiator</h1>
            <img src={Gladiator}  alt='Gladiator' />
            </div>
          <div className='image-cover-row-item'>
          <h1>Gladiator</h1>
            <img src={LOTR}  alt='Lord of the Rings' />
          </div>
          <div className='image-cover-row-item'>
          <h1>Gladiator</h1>
            <img src={PulpFiction} alt='Pulp Fiction' />
          </div>
        </div>
        <b></b><b></b><b></b><b></b>
                <div className='image-cover-row'>
          <div className='image-cover-row-item'>
          <h1>Gladiator</h1>
            <img src={StarWars}  alt='Star Wars' />
          </div>
          <div className='image-cover-row-item'>
          <h1>Gladiator</h1>
            <img src={Terminator}  alt='The Terminator' />
          </div>
          <div className='image-cover-row-item'>
          <h1>Gladiator</h1>
            <img src={TopGun} alt='Top Gun' />
          </div>
        </div>
      </div>
    );
  }
} 
export default App;
import Gladiator from './Gladiator.jpg';
import LOTR from './LOTR.jpg';
import PulpFiction from './Pulp Fiction.jpg';
import StarWars from './Star Wars.jpg';
import Terminator from './Terminator.jpg';
import TopGun from './Top Gun.jpg';

export default function getMovies() {
    return [
      { name: "Gladiator", 
      picture: Gladiator, 
      id: 'Galdiator'},

      { name: "Lord of The Ring", 
      picture: LOTR, id: 
      'LordofTheRings' },
      
      { name: "Pulp Fiction", 
      picture: PulpFiction, 
      id: 'PulpFiction' },

      { name: "Star Wars", 
      picture: StarWars, 
      id: 'StawWars' },

      { name: "The Terminator", 
      picture: Terminator,
      id: 'TheTerminator' },

      { name: "Top Gun", 
      picture: TopGun, 
      id: 'TopGun' },
    ];
  }

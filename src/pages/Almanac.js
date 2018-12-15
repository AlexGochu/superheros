import React, {Component} from 'react';
import './Almanac.css';
import HeroCard from '../components/HeroCard';
import Divider from '../components/Divider';
class Almanac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroesAlmanac: {
                title: "Super Heroes Almanac",
                subtitle: "The ultimate guide",
                heroes: [
                  {
                    avatar: "https://i.ibb.co/xjLzhxr/ex1-Artboard-1.jpg",
                    heroName: "Captain America",
                    secretIdentity: "Steve Rogers",
                    description:
                      "America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty."
                  },
                  {
                    avatar: "https://i.ibb.co/M93zQ17/ex1-Artboard-3.jpg",
                    heroName: "Iron Man",
                    secretIdentity: "Tony Stark",
                    description:
                      "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger."
                  },
                  {
                    avatar: "https://i.ibb.co/D1v60km/ex1-Artboard-2.jpg",
                    heroName: "Thor",
                    secretIdentity: "Hot guy",
                    description:
                      "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond."
                  }
                ]
              }
            };
        };
    render() {
        return(
            <div className="almanac">
                <div className="almanac__container">
                    <h1>{this.state.heroesAlmanac.title}</h1>
                    <h2>{this.state.heroesAlmanac.subtitle}</h2>
                    <div style={{margin: 20}}>
                        <div className="almanac__section" >
                            {this.state.heroesAlmanac.heroes.map( (hero, index) => {
                                if(index !== this.state.heroesAlmanac.heroes.length - 1)  {
                                    return ([<HeroCard key={`card${index}`} hero={hero} />, <Divider key={`devider${index}`}/>]);
                                } else {
                                    return (<HeroCard key={index} hero={hero} />);
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Almanac;
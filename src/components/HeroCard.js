import React, {Component} from 'react';
import './HeroCard.css';

class HeroCard extends Component {
    render () {
        const {hero} = this.props;
        return (
           <div className="hero-card">
                <img src={hero.avatar} alt="ymg" className="hero-card__avatar" />
                <div className="hero-card__name">{hero.heroName}</div>
                <div className="hero-card__nickname">{hero.secretIdentity}</div>
                <div className="hero-card__description">{hero.description}</div>
           </div>
        );
    }
}
export default HeroCard;
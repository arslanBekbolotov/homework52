import React, {useState} from 'react';
import './cards.css';
import './App.css';
import CardView from "./components/CardView/CardView";
import CardDesk from "./lib/CardDesk";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand"

const cardDesk = new CardDesk();

const App = () => {
    const [cards,setCards]= useState<Card[]>([])

    const getCards = () => {
        const newCards = cardDesk.getCards(5);

        if(newCards) {
            const correctCards = newCards.filter(card => {
                return card !== null;
            })
            setCards(correctCards);
        }
    }

    if(cards.length === 0){
        if(!document.querySelector("button")){
            return <button className="firstBtn" onClick={getCards}>Раздать карты</button>
        }

        return <p style={{textAlign:'center'}}>Карт не осталось</p>
    }

    const pokerHand = new PokerHand(cards);
    const combination = pokerHand.getOutcome();

    return (
        <div className="App">
            <div className="playingCards faceImages">
                <div>
                    <p>{combination}</p>
                </div>
                <div className="cardsContent">
                    {cards.map((card:Card,index) => (
                        <CardView rank={card.rank} suit={card.suit} key={index}/>
                    ))}
                </div>
            </div>
            <button className="secondBtn" onClick={getCards}>Раздать карты</button>
        </div>
    );

};

export default App;

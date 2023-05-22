import React from 'react';

interface ICardViewProps{
    rank:string;
    suit:string;
}

const CardView :React.FC<ICardViewProps> = ({rank,suit}) => {
const cardClasses =  `card rank-${rank.toLowerCase()} ${suit}`
    let symbol;
    if(suit === 'diams') {
        symbol = '♦';
    }else if(suit === 'hearts'){
        symbol = '♥';
    }else if(suit === 'clubs'){
        symbol = '♣';
    }else if(suit === 'spades'){
        symbol = '♠';
    }

    return (
        <div>
            <span className={cardClasses}>
                <span className="rank">{rank}</span>
                <span className="suit">{symbol}</span>
            </span>
        </div>
    );
};

export default CardView;
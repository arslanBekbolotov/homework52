import Card from "./Card";

class CardDesk{
    private readonly ranks = ['2', '3', '4','5','6','7','8','9','10','J','Q','K','A'];
    private  readonly  suits = ['diams','hearts','clubs','spades'];
    public desk:Card[] = [];

    constructor() {
        this.suits.forEach(suit =>{
            this.ranks.forEach(rank=>{
                const card = new Card(rank,suit);
                this.desk.push(card);
            })
        })
    }

    getCard = (): Card | null => {
        if (this.desk.length === 0) {
            return null; // or handle empty deck case
        }
        const randomIndex = Math.floor(Math.random() * this.desk.length);
        return this.desk.splice(randomIndex, 1)[0];
    };

    getCards(howMany: number):Card[] | null{
        let cards:Card[] = [];
        for(let i = 1;i <= howMany; i++){
          cards.push(<Card>this.getCard())
        }
        return cards;
    }
}

export default CardDesk;
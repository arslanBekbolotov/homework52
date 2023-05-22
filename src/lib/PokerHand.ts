import Card from "./Card";

class PokerHand {
    constructor(public desk: Card[] = []) {
    }

    getOutcome() {
            let ranks: { [rank: string]: number } = {};
            let pairs: string[] = [];
            let threeOfAKind: string | undefined;
            let flush: boolean = true;

            for (let i = 0; i < this.desk.length; i++) {
                const rank = this.desk[i].rank;
                if (ranks[rank]) {
                    ranks[rank]++;
                } else {
                    ranks[rank] = 1;
                }
            }

            for (let i = 0; i < this.desk.length - 1; i++) {
                if (this.desk[i].suit !== this.desk[i + 1].suit) {
                    flush = false;
                    break;
                }
            }

            for (let rank in ranks) {
                if (ranks[rank] === 2) {
                    pairs.push(rank);
                } else if (ranks[rank] === 3) {
                    threeOfAKind = rank;
                }
            }

            if (flush) {
                return "Флеш";
            }else if(threeOfAKind) {
                return `Тройка ${threeOfAKind}`;
            } else if (pairs.length === 2) {
                return `Две пары ${pairs[0]} и ${pairs[1]}`;
            } else if (pairs.length === 1) {
                return `Одна пара ${pairs[0]}`;
            } else {
                return 'Нет совпадений';
            }
        }
}

export default PokerHand;

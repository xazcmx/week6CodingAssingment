

class Deck {
//here i would like to assign a "weight" to the cards along with 
//the suit and value, but I couldn't figure out how to get all 3
//in an array working, so I have cut that out and will just be
//the numerical "weight" of the cards instead of adding that 
//feature which I think woul make it more visually appealing
//so, for example, a card 1H would represent a 2 of hearts
//and a 13D would represent an Ace of Diamonds
    constructor(suit, cardWeight) { 
        this.suit = suit;
        this.cardWeight = cardWeight;
        this.deck = [];
    }
    //making the deck, I know this is a more memory intensive method
    //of doing this, but it was easier for me this way
    makeDeck() {
        let suit = ["H","D","C","S"];
        let cardWeight = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for (let x = 0; x < suit.length;x++) {
            for(let y =0;y < cardWeight.length;y++) {
                this.deck.push(new Deck(suit[x], cardWeight[y]));
            }
        }
    }
    //this works to make a 52 card deck with a suit and a card weight(value)

    shuffleDeck() {
        let firstPosition;
        let secondPosition;
        let floating;
        for(let i =0;i < this.deck.length;i++) {
            firstPosition = Math.floor((Math.random() * this.deck.length));
            secondPosition = Math.floor((Math.random() * this.deck.length));
            floating = this.deck[firstPosition];
            this.deck[firstPosition] = this.deck[secondPosition];
            this.deck[secondPosition] = floating;
        }
    }
    //I'm not a huge fan of this method, but i got it to work, so
    //here it stays
}

// let test1 = new Deck();
// test1.makeDeck();
// test1.shuffleDeck();
// console.log(test1.deck);

//^^^^ me testing the methods to see if they work

class Player {


    constructor(player) {
        this.player = player;
        this.playerPoints = 0;
        this.playerHand = [];
             }
}

// let testing1 = new Player("player1");
// let testing2 = new Player("player2");
// console.log(testing);
// console.log(testing1);

class Game {
    constructor() {
        this.players = [];
    }
    start() { //could make this more dynamic
        this.players.push(new Player("player1"));
        this.players.push(new Player("player2"));
    }
    deal() { //is there another method to use at the end of this?
        let newDeck = new Deck();
        newDeck.makeDeck();
        newDeck.shuffleDeck();
        this.players[0].playerHand = newDeck.deck.slice(0,26);
        this.players[1].playerHand = newDeck.deck.slice(26,52);
    }
    checkGameState() {
        let player1Hand = this.players[0].playerHand;
        let player2Hand = this.players[1].playerHand;
        while(this.players[0].playerHand.length > 0) {
            let card1 = player1Hand.shift();
            let card2 = player2Hand.shift();
        
        if(card1.cardWeight > card2.cardWeight) {
            this.players[0].playerPoints +=1;
        } else if (card1.cardWeight < card2.cardWeight) {
            this.players[1].playerPoints +=1;
        } else {}
        }
        console.log(`Player 1 has ${this.players[0].playerPoints} points
        Player 2 has ${this.players[1].playerPoints} points`);
    }
}

// let testingDeck = new Deck();
// testingDeck.makeDeck();
// testingDeck.shuffleDeck();
// let print = testingDeck.deck.slice(0,26);
// let print2 = testingDeck.deck.slice(26, 52);
// console.log(print);
// console.log(print2);

//testing functionality as i go, to see if the methods get what i want


let newGame = new Game();
newGame.start();
newGame.deal();
newGame.checkGameState();

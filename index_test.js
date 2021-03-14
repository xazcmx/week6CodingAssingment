

var expect = chai.expect;

describe("Program functions", function() {
    let deckTest = new Deck;
    let gameTest = new Game;
    describe("#makeDeck", function() {
        it("should make a deck of 52 cards combining the suit and cardWeight vars", function() {
            deckTest.makeDeck();
            expect(deckTest.deck).to.have.length(52);
        });
    });
    describe("#shuffleDeck", function() {
        it("should shuffle the deck made with the above function", function() {
            deckTest.shuffleDeck();
            expect(deckTest.deck).to.have.length(52)
        })
    })
    describe("#start", function() {
        it("should add players to the players array", function() {
            gameTest.start();
            expect(gameTest.players).to.have.length(2);
        })
    })
    describe("#deal", function() {
        it("should give a player an array of 26 cards", function() {
            gameTest.deal();
            expect(gameTest.players[0].playerHand).to.have.length(26)
        })
    })

    describe("#checkGameState", function() {
        it("should return player points in the players array", function() {
            gameTest.checkGameState();
            expect(gameTest.players[0].playerPoints && gameTest.players[1].playerPoints > 0).to.be.true
        })
    })
});


const pickButtons = document.querySelectorAll('button')
const p1CardPick = document.querySelector('#player1CardPick');
const p2CardPick = document.querySelector('#player2CardPick');
const p1CardIMG = document.querySelector('#player1sCard');
const p2CardIMG = document.querySelector('#player2sCard');
const p1Score = document.querySelector('#play1Score');
const p2Score = document.querySelector('#play2Score')
const winnerOutput = document.querySelector('#winner');

// Taking the deck from the API and storing it in a variable:
let deck = null;

function setDeck(deckValue){
    if(deck === null){
        deck = deckValue
        console.log(deck)
    } else {
        return deck;
    }
}

(function fetchDeck(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res=> res.json())
    .then(data=> {
        // console.log(data.deck_id)
        setDeck(data.deck_id)
    })
    .catch(err => {
        console.log(`error: ${err}`)
    });
}())

const drawCards = {
    p1IntialDraw: true,
    p2InitialDraw: true,
    p1cardCount: 2,
    p2cardCount: 2,

    player1drawCard: function(){
        if(this.p1IntialDraw === true) {
            this.p1cardCount = 2;
        } else {
            this.p1cardCount = 1;
        }
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${this.p1cardCount}`)
        .then (res=> res.json())
        .then(data => {
            let values = Array.from(data.cards)
            console.log(values.forEach(elem=>console.log(elem.value)))
            this.p1IntialDraw = false;
        })
        .catch(err=>{
            console.log(`Error: ${err}`)
        });
    },

    player2drawCard: function (){
        if(this.p2InitialDraw === true) {
            this.p2cardCount = 2;
        } else {
            this.p2cardCount = 1;
        }
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${this.p2cardCount}`)
        .then (res=> res.json())
        .then(data => {
            this.p2InitialDraw = false;
            console.log(data);
        })
        .catch(err=>{
            console.log(`Error: ${err}`)
        });
    },
}


Array.from(pickButtons).forEach(link=> {
    link.addEventListener('click', e=>{
        if(e.target.id === 'player1CardPick'){
            drawCards.player1drawCard();
        } else if(e.target.id === 'player2CardPick'){
            drawCards.player2drawCard();
        }
    })
})



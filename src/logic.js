// Created by laTortuga and LuM
// (c) All rights reserved.


/** 
*
*   @author LuM
*   @version 1.0
*   @license MIT
*   @file logic.js
*   @description game logic
*
*/


"use strict";


const /* #define */ pattern = [ "hearts", "diams", "clubs", "spades" ];
const /* #define */ rank = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
const /* #define */ PLAYER_AMOUNT = 4;

var /* string[] */ player_cards = {}, /* string[] */ bot_1_cards = {}, /* string[] */ bot_2_cards = {}, /* string[] */ bot_3_cards = {}, /* string[] */ cards = [], /* string[] */ shuffledCards = [];
let bot_1, bot_2, bot_3;
let shuffle = (array) => { for(let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; };


function setup() { 
    // get all cards
    // cards array pattern => [PATTERN]_[RANK]
    for(var i = 0; i < pattern.length; i++) {
        for(var j = 0; j < rank.length; j++) {
            let card = pattern[i] + '_' + rank[j];
            cards.push(card);

            // debugger;
        }
    }
    
    // shuffle cards
    shuffledCards = shuffle(cards);
    
    // spread cards
    let amountOfCardsForEachPlayer = shuffledCards.length / PLAYER_AMOUNT;
    let cardsGroups = { /* TODO: make this object dynamicaly to PLAYER_AMOUNT macro */
        0: {},
        1: {},
        2: {},
        3: {}
    }; // IF PLAYER_AMOUNT IS CHANGED, THEN CHANGE THIS OBJECT ALSO
  
    for(var k = 0; k < PLAYER_AMOUNT; k++) {
        for(var l = 0; l < amountOfCardsForEachPlayer; l++) {
            cardsGroups[k][l] = shuffledCards[0];
            shuffledCards.shift(); // remove first element
        }
    }
    
    // deal cards
    player_cards = cardsGroups[0];
    bot_1_cards = cardsGroups[1];
    bot_2_cards = cardsGroups[2];
    bot_3_cards = cardsGroups[3];
  
    // create players
    bot_1 = new Bot(bot_1_cards);
    bot_2 = new Bot(bot_2_cards);
    bot_3 = new Bot(bot_3_cards);
}

var /* boolean */ start = true;
var /* string[] */ globalCardCounting = []; // array of past cards

var pushGlobal = (arr) => { for(var i = 0; i < arr.length; i++) { globalCardCounting.push(arr[i]); } };
class Bot {
    constructor(deck) {
        this.cards = deck; 
      
        // define pairs and sort them into arrays/maps 
        this.all_2 = [];
        this.all_3 = [];
        this.all_4 = [];
        this.all_5 = [];
        this.all_6 = [];
        this.all_7 = [];
        this.all_8 = [];
        this.all_9 = [];
        this.all_10 = [];
        this.all_J = [];
        this.all_Q = [];
        this.all_K = [];
        this.all_A = [];
    
        for(var j = 0; j < rank.length * pattern.length / PLAYER_AMOUNT /* equal to this.cards.length if this.cards = [] != {} */ ; j++) { /* TODO: make async function migration */
            let currentCard = this.cards[j];
              
            // filter card
            let currentCardFilter = currentCard.split("_"); // string[]
                
            switch(currentCardFilter[1]) { /* TODO: make this array dynamicaly to pairs */
                case "2":
                    this.all_2.push(currentCard);
                    break;
                case "3":
                    this.all_3.push(currentCard);
                    break;
                case "4":
                    this.all_4.push(currentCard);
                    break;
                case "5":
                this.all_5.push(currentCard);
                    break;
                case "6":
                    this.all_6.push(currentCard);
                    break;
                case "7":
                    this.all_7.push(currentCard);
                    break;
                case "8":
                    this.all_8.push(currentCard);
                    break;
                case "9":
                    this.all_9.push(currentCard);
                    break;
                case "10":
                    this.all_10.push(currentCard);
                    break;
                case "J":
                    this.all_J.push(currentCard);
                    break;
                case "Q":
                    this.all_Q.push(currentCard);
                    break;
                case "K":
                    this.all_K.push(currentCard);
                    break;
                case "A":
                    this.all_A.push(currentCard);
                    break;
            }
        }    
      
        this.all = [
            this.all_2,
            this.all_3,
            this.all_4,
            this.all_5,
            this.all_6,
            this.all_7,
            this.all_8,
            this.all_9,
            this.all_10,
            this.all_J,
            this.all_Q,
            this.all_K,
            this.all_A
        ];
    }
    get brain() { // bot thinks which card(s) he should draw

        /**
        *   
        *   LIST OF WHAT HE ACTUALLY MAKES (SIMULATED AI):
        * 
        *   (1) check if he is the first player of current round and if there aren't already cards in the middle
        *       if(true) => go to point (a)
        *       if(false) => go to point (b)
        *       
        *       (a) start with "random" card pair if it doesn't find any decision
        * 
        * 
        *       (b) make main logic through decision (decision by counting the cards and predict algorithm)
        * 
        */
      
        let currentPushVar = [];
      
        if(start) { // current player is the first of current round
            if(globalCardCounting !== []) {
                
            }
            else { // take a random card the smallest as possible
                for(var i = 0; i < this.all.length; i++) {
                    if(this.all[i].length !== 0) {
                        for(var j = 0; j < this.all[i].length; j++) {
                            currentPushVar = this.all[i][j]; // push all cards
                        }
                      
                        // remove pushed cards
                        this.all[i] = [];
                    }
                }
            }
        }
        else {
          
        }
      
        return currentPushVar;
    }

}

setup(); // start setup the game
/*
window.onload = function() {
    setup(); // start setup the game
}
*/

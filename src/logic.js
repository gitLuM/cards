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
            cardsGroups[k][l] = shuffledCards[l];
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
    bot_2 = new Bot(bot_1_cards);
    bot_3 = new Bot(bot_1_cards);
}


class Bot {
    constructor(cards) {
        this.cards = cards; 
    }
    brain() { // bot think about which card(s) he should draw

        /**
        *   
        *   LIST OF WHAT HE ACTUALLY MAKES (SIMULATED AI):
        * 
        *   (1) check if he is the first player of current round and if there aren't already cards in the middle
        *       if(true) => go to point (a)
        *       if(false) => go to point (b)
        *       
        *       (a) 
        * 
        * 
        *       (b)
        * 
        * 
        */
    }

}

window.onload = function() {
    setup(); // start setup the game
}
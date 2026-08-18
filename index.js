// let firstCard = 10
// let secondCard = 7

// let hasBlackJack = false
// let islive = true
// let message = ""

// let sum = firstCard + secondCard

// if(sum <= 20){
//     message = "Do you want to draw a new card ? 😊"
// }
// else if(sum === 21){
//     message = "whooo ! You've got Blackjack 👋!"
//     hasBlackJack = true
// }
// else{
//     message = "better luck next time, your are out of the game! 
//     islive = false
// }

// console.log(hasBlackJack)



let card1 = 10
let card2 = 10 

//let sum = card1 + card2

let update_card1 = document.getElementById("card1")
let update_card2 =  document.getElementById("card2")
let update_sum = document.getElementById("sum")
let update_message = document.getElementById("message")

let message = ""
let hasBlackJack = false
let islive = true

let update_newCard = document.getElementById("newCard")

let credits = document.getElementById("credit")
let playerName_holder = document.getElementById("player-name")

let playerchips = 145
let playerName = "toxic"
playerName_holder.textContent = playerName


function debit_money(){
    
   
    if(playerchips === 10){
    credits.textContent = "sorry you are running out of credits"

    islive = false
    }
    else{
        playerchips = playerchips - 15
        credits.textContent = playerchips + "$"
    }
}






function updateCard1(){
        
    update_card1.textContent = card1
    console.log(card1)

}
updateCard1()


function updateCard2(){

    update_card2.textContent = card2
    console.log(card2)

}
updateCard2()

function sumofCards(a, b){
    let result = a + b 
    return result
}

let sum = sumofCards(card1, card2)

update_sum.textContent = sum
console.log(sum)


function startGame(){
    update_newCard.textContent = ""
    update_message.textContent =""
    card1 = Math.floor(Math.random() * 13) + 1
    card2 = Math.floor(Math.random() * 13) + 1
    
    update_card2.textContent = card2

    if(card1 === 1){
        update_card1.textContent = "A"

        sum = 1 + card2 + newcard_number
        update_sum.textContent = "A"+","+ card2

        
    }
    else if (card1 === 11){
        update_card1.textContent = "J"
        sum = 11 + card2 
        update_sum.textContent = "J"+","+ card2
    }
    else if (card1 === 12){
         update_card1.textContent = "Q"   
         sum = 12 + card2 
         update_sum.textContent = "Q"+","+ card2
    }
    else if(card1 === 13){
        update_card1.textContent = "K" 
        sum = 13 + card2 
        update_sum.textContent = "K"+","+  card2 
    }
    else{
         update_card1.textContent = card1
         sum = card1 + card2 
         update_sum.textContent = sum
    }

    // update_card1.textContent = card1
    // update_card2.textContent = card2


    if(sum <= 20){
    message = "Do you want to draw a new card ? 😊"
    update_message.textContent = message
}
else if(sum === 21){
    message = "whooo ! You've got Blackjack 👋!"
    update_message.textContent = message
    hasBlackJack = true
    
    
}
else{
    message = "Better luck next time , you are out of game 😭"
    update_message.textContent = message
    islive = false
}
playerchips = 145
credits.textContent = playerchips + "$"
    
}




function newCard(){
    let new_card = Math.floor(Math.random() * 13) + 1
    update_newCard.textContent = new_card
    debit_money()

    
    return new_card
    
   
}

function drawCard(){
    let new_card_Number = newCard()
    console.log(new_card_Number)

    let card_sum = sum + new_card_Number
    update_sum.textContent = card_sum
     
    if(card_sum <= 20){
    message = "Do you want to draw a new card ? 😊"
    update_message.textContent = message
}
else if(card_sum === 21){
    message = "whooo ! You've got Blackjack 👋!"
    update_message.textContent = message
    hasBlackJack = true
    
    
}
else{
    message = "Better luck next time , you are out of game 😭"
    update_message.textContent = message   
}
}

# 🃏 Blackjack Game

A simple interactive Blackjack game built using **HTML, CSS, and JavaScript**.

This project was created as a JavaScript practice project to understand DOM manipulation, functions, random number generation, conditional statements, events, and basic game logic.

---

## 🎮 About the Game

Blackjack is a card game where the goal is to get a card total as close to **21** as possible without going over 21.

In this project:

- The player starts with two randomly generated cards.
- The total of the cards is calculated.
- The player can draw an additional card.
- The game checks the total after drawing a new card.
- The game displays a message based on the current total.

---

## ✨ Features

- 🎲 Random card generation
- 🃏 Two cards generated when starting the game
- 🎴 Ability to draw a new card
- 🔢 Automatic sum calculation
- 💬 Dynamic game messages
- 🏆 Blackjack detection when the total reaches 21
- 💀 Game-over detection when the total exceeds 21
- 🔤 Display of A, J, Q and K cards
- 📱 Responsive design for mobile and desktop
- 🎨 Blackjack-inspired dark green and yellow UI

---

## 🛠️ Technologies Used

### HTML
Used to create the structure of the game interface.

### CSS
Used for:

- Layout
- Colors
- Buttons
- Responsive design
- Typography
- Game card styling

### JavaScript
Used for:

- Random card generation
- Game logic
- Functions
- DOM manipulation
- Event handling
- Score calculation
- Updating the game interface

---

## 🧠 JavaScript Concepts Practiced

This project helped me practice:

- Variables
- Functions
- Function parameters
- Return values
- `if / else if / else`
- `Math.random()`
- `Math.floor()`
- DOM manipulation
- `document.getElementById()`
- `.textContent`
- Button events
- Basic game state
- Reusing functions

---

## 🎯 Game Flow

```text
START GAME
     │
     ▼
Generate Card 1
     │
     ▼
Generate Card 2
     │
     ▼
Calculate Sum
     │
     ├───────────────┐
     │               │
     ▼               ▼
  Sum ≤ 20         Sum = 21
     │               │
     ▼               ▼
 Draw New Card     Blackjack
     │
     ▼
Generate Card 3
     │
     ▼
Calculate New Sum
     │
     ├───────────┬───────────┐
     ▼           ▼           ▼
   ≤ 20         21          > 21
     │           │            │
     ▼           ▼            ▼
Continue     Blackjack     Game Over
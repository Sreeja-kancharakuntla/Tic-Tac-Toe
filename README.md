# Tic-Tac-Toe
This is a classic two‑player Tic‑Tac‑Toe (Noughts and Crosses) game implemented in JavaScript, HTML, and CSS. Players take turns marking the 3 × 3 grid with X or O until one achieves three in a row horizontally, vertically, or diagonally, or the board fills and ends in a draw.
Key Features

# Feature	Details:
## ✨ Features
- **Interactive 3 × 3 grid** – Click to place **X** or **O**.
- **Instant win/draw detection** – Auto-checks 8 winning combinations after every move.
- **Turn indicator & result banner** – Displays whose turn it is and declares winner/draw.
- **New Game button** – Resets the board for a fresh start.
- **🔙 Back button** – Lets players **undo the previous move**, great for fixing mistakes or casual play.

# Tech Stack:
**HTML:** Semantic structure for board, status display, and controls.

**CSS:** Grid layout, hover effects, and animated line‑through for winning combos.

**JavaScript:**
- Array‑based game state (board[9])
- Event listeners on cells
- Win‑checking function iterating predefined index sets
- UI updates and state reset logic

## 🧩 How It Works
- Game board is represented by an array of 9 elements.
- A predefined list of winning index combinations checks for victory after each move.
- The **Back button** uses a move history stack to remove the latest move and restore the previous game state.

# Learning Highlights
- Mastered DOM manipulation and event handling.
- Practiced modular JavaScript: separating game logic, UI updates, and storage.
-Gained experience in responsive web design and UX considerations.
- Implemented clean code patterns (immediately‑invoked function expression and constants for win states).

# Potential Enhancements
- Single‑player mode with Minimax AI for unbeatable computer opponent.
- Theme switcher (light/dark) and custom player symbols.
- Sound effects and subtle animations for wins and draws.
- Deployment as a PWA so users can install and play offline.
- Stores and updates X/0/draw counts using LocalStorage.

This project showcases fundamental front‑end skills—ideal for demonstrating JavaScript logic, UI interactivity, and clean code practices in your portfolio.

# 🗂️Project Structure
tic-tac-toe/
├─ index.html        # Markup
├─ style.css         # Styles
├─ script.js         # Game logic
└─ /demo             # Screenshots / GIF
# Output
<p align="center">
  <img src="demo/tic-tac-toe-output.gif" alt="Tic Tac Toe GIF" width="500"/>
</p>
You can play my game at : https://sreeja-tic-tac-toe.netlify.app/

# Contributing🤝
Pull requests are welcome! Open an issue first to discuss major changes.

# Built with 💙 by Sreeja Kancharakuntla.

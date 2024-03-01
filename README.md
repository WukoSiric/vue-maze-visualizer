# Vue Maze Visualizer

## Overview

This project is a simple maze visualizer built using Vue.js. The maze is generated using a recursive backtracking algorithm. The visualizer allows the user to generate a new maze and solve it using either a depth-first search or a breadth-first search algorithm.

## Project Setup

### Prerequisites
To start, you must have the following installed on your local machine:
- Node.js
- npm
- Git


### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/WukoSiric/vue-maze-visualizer.git
   ```
2. **Change to the project directory:**
   ```bash
    cd vue-maze-visualizer
   ```

3. **Install the dependencies:**
   ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
     npm run dev
    ```

## Project Structure and Key Features
- **Cell**: Represents a single cell in the maze. Contains information about the cell's position, walls, and visited status.
- **Maze**: Represents the maze. Contains information about the maze's dimensions, cells, and methods to generate the maze.
- **Visualizer**: The main component that renders the maze modifying a HTML Canvas element.

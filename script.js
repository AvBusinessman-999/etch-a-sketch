const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");
const CONTAINER_SIZE = 560; // Matches CSS width & height in pixels

function createGrid(squaresPerSide) {
    // 1. Clear out any existing squares before building the new grid
    container.innerHTML = "";

    // 2. Calculate exact pixel size for each square
    const squareSize = CONTAINER_SIZE / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    // 3. Loop to generate and append every square div
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // 4. Add hover trail effect
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#0f172a"; // Dark slate ink trail
        });

        container.appendChild(square);
    }
}

// Handle user grid size button click
resizeBtn.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side (1 to 100):");
    let newSize = parseInt(userInput);

    // Validate input is a valid number between 1 and 100
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else if (userInput !== null) {
        alert("⚠️ Please enter a valid number between 1 and 100.");
    }
});

// Initialize default 16x16 grid on page load
createGrid(16);

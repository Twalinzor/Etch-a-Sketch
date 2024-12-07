document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const resetButton = document.getElementById("reset-button");

  function createGrid(size) {
    container.innerHTML = ""; // Clear previous grid
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      square.addEventListener("mouseenter", () => {
        const randomColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
        square.style.backgroundColor = randomColor;

        let currentOpacity = parseFloat(square.style.opacity) || 0;
        if (currentOpacity < 1) {
          square.style.opacity = currentOpacity + 0.1;
        }
      });

      container.appendChild(square);
    }
  }

  function resetGrid() {
    const size = parseInt(prompt("Enter new grid size (1-100):"), 10);
    if (isNaN(size) || size < 1 || size > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }
    createGrid(size);
  }

  createGrid(16); // Initialize the grid
  resetButton.addEventListener("click", resetGrid);
});

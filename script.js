const movableDiv = document.getElementById('movableDiv');

let divX = 0;
let divY = 0;
let cursorX = 0;
let cursorY = 0;
let velocityX = 0;
let velocityY = 0;

// Function to set the initial position so that the cursor is centered
function setInitialPosition() {
    const divWidth = movableDiv.clientWidth;
    const divHeight = movableDiv.clientHeight;
    divX = cursorX - divWidth / 1;
    divY = cursorY - divHeight / 1;
    movableDiv.style.left = divX + 'px';
    movableDiv.style.top = divY + 'px';
}

setInitialPosition(); // Set initial position

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function moveDiv() {
    // Calculate the velocity as the difference between cursor position and div position
    velocityX = (cursorX - divX) * 0.2; // Adjust the factor for desired speed
    velocityY = (cursorY - divY) * 0.2; // Adjust the factor for desired speed

    // Update the div position with velocity
    divX += velocityX;
    divY += velocityY;

    // Update the div's position
    movableDiv.style.left = divX + 'px';
    movableDiv.style.top = divY + 'px';

    // Call the function again on the next animation frame
    requestAnimationFrame(moveDiv);
}

// Start moving the div
requestAnimationFrame(moveDiv);

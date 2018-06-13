var numSquares = 6;
var colors = generateColors(numSquares);
var boxes = document.querySelectorAll('.square');
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function() {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquares = 3;
    colors = generateColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});
hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
            boxes[i].style.display = "block";
        }
    }
});

resetButton.addEventListener("click", function() {
    colors = generateColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++)
        boxes[i].style.background = colors[i];
    messageDisplay.textContent = "";
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors!";
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];

    boxes[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeAllColors(pickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again!"
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeAllColors(color) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = color;
    }
}
function pickRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

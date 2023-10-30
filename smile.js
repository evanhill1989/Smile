// position randomly
// event listeners when creating new divs for images
// <img class="face" src="smile.png" alt="smiley face">
// add initial smileys in random positions

const leftSide = document.querySelector("#left-side");
const rightSide = document.querySelector("#right-side");
const levelDisplay = document.querySelector("#level");

const container = document.querySelector(".container");


let numberOfFaces = 5;
let level = 1;

const newGameBtn = document.createElement('button');
newGameBtn.innerHTML = "Play Again";
newGameBtn.id = "new-game";
newGameBtn.addEventListener("click", resetGame);




function generateFaces() {
    for(i=0; i< numberOfFaces; i++){
        let face = document.createElement('img');
        face.src = 'smile.png';
        let randomTop = Math.floor(Math.random()*400);
        let randomLeft = Math.floor(Math.random()*400);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        leftSide.appendChild(face);

    }

    leftSide.lastChild.addEventListener("click", nextLevel);
    document.body.addEventListener("click", gameOver);

    let leftSideImages = leftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild); // Unintuitive that I would have to reference leftSideImages again inside the removeChild() method. 
    rightSide.appendChild(leftSideImages);

}


function nextLevel(event){
    event.stopPropagation();
    numberOfFaces += 5;
    level += 1;
    levelDisplay.innerHTML = level;
    generateFaces();

}

function gameOver(event){
    event.preventDefault();
    alert('Game Over!');
    document.body.removeEventListener("click", gameOver);
    leftSide.lastChild.removeEventListener("click", nextLevel);
    // could just use removeChildren() method
    while(leftSide.firstChild){
        leftSide.removeChild(leftSide.firstChild);
    };
    while(rightSide.firstChild){
        rightSide.removeChild(rightSide.firstChild);
    };
    level = 1;
    levelDisplay.innerHTML = level;
    container.appendChild(newGameBtn);
}

function newGame(){    
    
    
    
   
  
};

function resetGame(event){
    event.preventDefault();
    event.stopPropagation();
    container.removeChild(newGameBtn);
    numberOfFaces = 5;
    level = 1;
    levelDisplay.innerHTML = level;
    generateFaces();
}
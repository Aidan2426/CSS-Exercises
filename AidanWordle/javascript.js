document.addEventListener("DOMContentLoaded", () => {
    const words = [
        "AIDAN", "PHOTO", "CLEAT", "MATHS", "ROBOT", "CODES", "LABOR", "STEMI",
        "ALGOR", "GRAPH", "TECHS", "CIRCU", "WIREL", "DEVIC", "HACKS", "ENGIN",
        "STEMS", "LOGIC", "COMPS", "TUTOR", "SOFTW", "BITSY", "FRAME", "ARCHI",
        "SCALE", "ALPHA", "BRAIN", "FIBER", "BYTEB", "DIGIT", "MODEL", "STUDY",
        "NODES", "TECHY", "TREES", "METAL", "TOWER", "PEARL", "PLUMB",
        "TIMER", "SHOCK", "FIELD", "PAUSE", "ORDER", "BRICK", "BRUSH", "CABLE"
    ];
      
    const randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    console.log(randomWord)
    let randomChars = randomWord.split("");

    let rowCount = 0;
    let guessWord = "";//keeping the streak alive, new changes

    const textBox = document.querySelector("#wordInput");
    const addButton = document.querySelector("#addButton");

    const rows = [
        document.querySelectorAll("#r1b1, #r1b2, #r1b3, #r1b4, #r1b5"),
        document.querySelectorAll("#r2b1, #r2b2, #r2b3, #r2b4, #r2b5"),
        document.querySelectorAll("#r3b1, #r3b2, #r3b3, #r3b4, #r3b5"),
        document.querySelectorAll("#r4b1, #r4b2, #r4b3, #r4b4, #r4b5"),
        document.querySelectorAll("#r5b1, #r5b2, #r5b3, #r5b4, #r5b5"),
        document.querySelectorAll("#r6b1, #r6b2, #r6b3, #r6b4, #r6b5")
    ];

    const characters = document.querySelectorAll("#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s, #t, #u, #v, #w, #x, #y, #z");

    //havn't codded in a while need to get back to work

    document.body.addEventListener("keydown", function(e){

        if(rowCount >= rows.length)return;

        let currentRow = rows[rowCount];

        if(e.key.length == 1 && guessWord.length < 5){ //this is for single character 
            guessWord +=e.key.toUpperCase() 
            textBox.value = guessWord;
            currentRow[guessWord.length-1].textContent = e.key.toUpperCase();
        }

        else if(e.key == "Backspace"){
            currentRow[guessWord.length - 1].textContent = "";
            guessWord = guessWord.slice(0,-1);
            textBox.value = guessWord;  
        }

        if(e.key == "Enter"){
            pressed()
            flipBox.style.animation = 'none';
            flipBox.offsetHeight;
            flipBox.style.animation = 'flipBox .5s forwards';

        }
    });

    addButton.addEventListener("click", () => {
        pressed();
    });

    function pressed(){
        guessWord = textBox.value; 
        guessWord = guessWord.toUpperCase();

        if(guessWord.length > 5 || guessWord.length<5){
            alert("You must enter a 5 letter word");
            shakeBlocks(rowCount+1);

            return;
        }
        else{
            let letters = guessWord.split("")
            flipRows(rowCount+1)
            guess(guessWord, letters);
            textBox.value = "";
            guessWord = "";
            if(rowCount>=rows.length){
                gameOver()
            }
        }  
    }

    //this is alternative branch

    function updateKeyboardColor(letter, color){
        let keyElement = document.getElementById(letter.toLowerCase());
        if (keyElement){
            keyElement.style.background = color;
        }
    }

    function guess(guessWord, letters){
        let currentRow = rows[rowCount]

            for(let i = 0; i<letters.length; i++)
            {
                currentRow[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    updateKeyboardColor(letters[i], 'green');
                    currentRow[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    currentRow[i].style.background  = "yellow";
                    updateKeyboardColor(letters[i], 'yellow');
                }

                else{
                    currentRow[i].style.background = "red";
                    updateKeyboardColor(letters[i], 'red');
                }
            }  
            rowCount++;
        }   
        
        const flasbox = document.querySelector("#flashBox");

        const flipBox = document.querySelector("#flipBox");

        function gameOver(){
            flashBox.style.animation = 'none';  // Reset the animation
            flashBox.offsetHeight;  // Trigger reflow to apply the reset

            flashBox.style.display = 'block';
            flashBox.style.visibility = 'visible'; // Ensure the box is visible

            flashBox.style.animation = 'showAndFadeOut 10s forwards';

            flashBox.textContent = randomWord;

        }

        const row1Blocks = document.querySelectorAll("#row1 div");
        const row2Blocks = document.querySelectorAll("#row2 div");
        const row3Blocks = document.querySelectorAll("#row3 div");
        const row4Blocks = document.querySelectorAll("#row4 div");
        const row5Blocks = document.querySelectorAll("#row5 div");
        const row6Blocks = document.querySelectorAll("#row6 div");


        function flipRows(row){
            switch(row){
                case 1:
                row1Blocks.forEach(block => block.classList.add("flip"));
                setTimeout(() => {
                row1Blocks.forEach(block => block.classList.remove("flip"));
                }, 500);
                break;
            case 2:
                row2Blocks.forEach(block => block.classList.add("flip"));
                setTimeout(() => {
                row2Blocks.forEach(block => block.classList.remove("flip"));
                }, 500);
                break;
            case 3:
                row3Blocks.forEach(block => block.classList.add("flip"));
                setTimeout(() => {
                row3Blocks.forEach(block => block.classList.remove("flip"));
                }, 500);
                break;
            case 4:
                row4Blocks.forEach(block => block.classList.add("flip"));
                setTimeout(() => {
                row4Blocks.forEach(block => block.classList.remove("flip"));
                }, 500);
                break;
            case 5:
                row5Blocks.forEach(block => block.classList.add("flip"));
                setTimeout(() => {
                row5Blocks.forEach(block => block.classList.remove("flip"));
                }, 500);
                break;
            case 6:
                row6Blocks.forEach(block => block.classList.add("flip"));
                setTimeout(() => {
                row6Blocks.forEach(block => block.classList.remove("flip"));
                }, 500);
                break;
            }
        }

        function shakeBlocks(row){
        console.log(row);
        switch(row){
            case 1:
                row1Blocks.forEach(block => block.classList.add("shake"));
                setTimeout(() => {
                row1Blocks.forEach(block => block.classList.remove("shake"));
                }, 500);
                break;
            case 2:
                row2Blocks.forEach(block => block.classList.add("shake"));
                setTimeout(() => {
                row2Blocks.forEach(block => block.classList.remove("shake"));
                }, 500);
                break;
            case 3:
                row3Blocks.forEach(block => block.classList.add("shake"));
                setTimeout(() => {
                row3Blocks.forEach(block => block.classList.remove("shake"));
                }, 500);
                break;
            case 4:
                row4Blocks.forEach(block => block.classList.add("shake"));
                setTimeout(() => {
                row4Blocks.forEach(block => block.classList.remove("shake"));
                }, 500);
                break;
            case 5:
                row5Blocks.forEach(block => block.classList.add("shake"));
                setTimeout(() => {
                row5Blocks.forEach(block => block.classList.remove("shake"));
                }, 500);
                break;
            case 6:
                row6Blocks.forEach(block => block.classList.add("shake"));
                setTimeout(() => {
                row6Blocks.forEach(block => block.classList.remove("shake"));
                }, 500);
                break;
            }
        }
});

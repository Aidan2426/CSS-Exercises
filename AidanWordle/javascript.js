document.addEventListener("DOMContentLoaded", () => {
    const words = [
        "AIDAN", "PHOTO", "CLEAT", "MATHS", "ROBOT", "CODES", "LABOR", "STEMI",
        "ALGOR", "GRAPH", "TECHS", "CIRCU", "WIREL", "DEVIC", "HACKS", "ENGINE",
        "STEMS", "LOGIC", "COMPS", "MATHS", "TUTOR", "SOFTW", "BITSY", "FRAME",
        "ARCHI", "SCALE", "ALPHA", "BRAIN", "FIBER", "BYTEB", "DIGIT", "MODEL",
        "STUDY", "NODES", "TECHY", "CLEAR", "FUTUR", "MATRIX", "DATAK", "QUERY",
        "LABED", "REACT", "RIGOR", "VECTO", "PROOF", "TRACK", "SIMUL", "TRIAL",
        "INNOV", "BLOCS", "RISER", "START", "VIRUS", "LOGIC", "HAWKS"
      ];
      
    const randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    let randomChars = randomWord.split("");

    let rowCount = 0;
    let guessWord = ""

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

    addButton.addEventListener("click", pressed);
    
    document.body.addEventListener("keydown", function(e){
        if(e.key.length == 1 && guessWord.length < 5){ //this is for single character 
            guessWord +=e.key.toUpperCase() 
            textBox.value = guessWord;
        }else if(e.key == "Backspace"){
            guessWord = guessWord.slice(0,-1);
            textBox.value = guessWord;
        }
        if(e.key == "Enter"){
            pressed()
        }
    });

    function pressed(){
        guessWord = textBox.value; 
        guessWord = guessWord.toUpperCase();
        if(guessWord.length > 5 || guessWord.length<5){
            alert("You must enter a 5 letter word");
            return;
        }
        else{
            let letters = guessWord.split("")
            guess(guessWord, letters);
            textBox.value = "";
            guessWord = "";
            if(rowCount>=rows.length){
                alert("game over");
            }
        }  
    }

    function guess(guessWord, letters){
        let currentRow = rows[rowCount]

            for(let i = 0; i<letters.length; i++)
            {
                currentRow[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    currentRow[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    currentRow[i].style.background  = "yellow";
                }

                else{
                    currentRow[i].style.background = "red";
                }
            }  
            rowCount++;
        }      
});

document.addEventListener("DOMContentLoaded", () => {

    const words = ["AIDAN", "PHOTO", "CLEAT", "MATHS"];
    const randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    let randomChars = randomWord.split("");

    let rowCount = 0;
    let text = ""
    //literaly no clue whats happening

    const textBox = document.querySelector("#wordInput");
    const addButton = document.querySelector("#addButton");
    const display = document.querySelector("#display")

    const rows = [
        document.querySelectorAll("#r1b1, #r1b2, #r1b3, #r1b4, #r1b5"),
        document.querySelectorAll("#r2b1, #r2b2, #r2b3, #r2b4, #r2b5"),
        document.querySelectorAll("#r3b1, #r3b2, #r3b3, #r3b4, #r3b5"),
        document.querySelectorAll("#r4b1, #r4b2, #r4b3, #r4b4, #r4b5"),
        document.querySelectorAll("#r5b1, #r5b2, #r5b3, #r5b4, #r5b5"),
        document.querySelectorAll("#r6b1, #r6b2, #r6b3, #r6b4, #r6b5")
    ];

    addButton.addEventListener("click", pressed);
    
    textBox.addEventListener("keydown", (e) => {
        if(e.key == "Enter"){
            pressed()
        }

        if(e.key.length == 1){
            text+=e.key;
        }else if (e.key == "Backspace"){
            text = text.slice(0,-1)
        }
        display.innerText = text || "Start typing . . . ";
    });

    display.addEventListener("input", () =>{
        text = textBox.value;
        display.innerText = text || "Start typing . . . ";

    })



    function pressed(){
        let guessWord = textBox.value; 
        guessWord = guessWord.toUpperCase();
        if(guessWord.length > 5 || guessWord.length<5){
            alert("You must enter a 5 letter word");
        }
        else{
            let letters = guessWord.split("")
            guess(guessWord, letters);
            textBox.value = "";
            text = "";
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

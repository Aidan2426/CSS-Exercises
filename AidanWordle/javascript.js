document.addEventListener("DOMContentLoaded", () => {

    const words = ["aidan", "photo", "cleat", "maths"];
    const randomIndex = Math.floor(Math.random() * words.length+1);
    let randomWord = words[randomIndex];
    let randomChars = randomWord.split("");

    let rowCount = 1;

    

    const textBox = document.querySelector("#wordInput");
    const addButton = document.querySelector("#addButton");
    const temp = document.querySelector("#temp");

    const row1 = [
        document.querySelector("#r1b1"),
        document.querySelector("#r1b2"),
        document.querySelector("#r1b3"),
        document.querySelector("#r1b4"),
        document.querySelector("#r1b5")
    ];

    const row2 = [
        document.querySelector("#r2b1"),
        document.querySelector("#r2b2"),
        document.querySelector("#r2b3"),
        document.querySelector("#r2b4"),
        document.querySelector("#r2b5")
    ];

    const row3 = [
        document.querySelector("#r3b1"),
        document.querySelector("#r3b2"),
        document.querySelector("#r3b3"),
        document.querySelector("#r3b4"),
        document.querySelector("#r3b5")
    ];

    const row4 = [
        document.querySelector("#r4b1"),
        document.querySelector("#r4b2"),
        document.querySelector("#r4b3"),
        document.querySelector("#r4b4"),
        document.querySelector("#r4b5")
    ];

    const row5 = [
        document.querySelector("#r5b1"),
        document.querySelector("#r5b2"),
        document.querySelector("#r5b3"),
        document.querySelector("#r5b4"),
        document.querySelector("#r5b5")
    ];

    addButton.addEventListener("click", pressed);
    
    textBox.addEventListener("keydown", (e) => {
        if(e.key == "Enter"){
            pressed()
        }
    });

    function pressed(){
        let guessWord = textBox.value; 
        let letters = guessWord.split("")

        guess(guessWord, letters);
        textBox.value = "";
    }

    function guess(guessWord, letters){

        console.log("This is the row count " + rowCount )

        if(rowCount == 1){
            for(let i = 0; i<letters.length; i++)
            {
                row1[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    row1[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    row1[i].style.background  = "yellow";
                }

                else{
                    row1[i].style.background = "red";
                }
            }  
        }

        if(rowCount == 2){
            for(let i = 0; i<letters.length; i++)
            {
                row2[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    row2[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    row2[i].style.background  = "yellow";
                }

                else{
                    row2[i].style.background = "red";
                }
            }  
        }

        if(rowCount == 3){
            for(let i = 0; i<letters.length; i++)
            {
                row3[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    row3[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    row3[i].style.background  = "yellow";
                }

                else{
                    row3[i].style.background = "red";
                }
            }  
        }

        if(rowCount == 4){
            for(let i = 0; i<letters.length; i++)
            {
                row4[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    row4[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    row4[i].style.background  = "yellow";
                }

                else{
                    row4[i].style.background = "red";
                }
            }  
        }

        if(rowCount == 5){
            for(let i = 0; i<letters.length; i++)
            {
                row5[i].textContent = letters[i]

                if(letters[i] == randomChars[i]){
                    row5[i].style.background = "green"
                }

                else if(randomChars.includes(letters[i])){
                    row5[i].style.background  = "yellow";
                }

                else{
                    row5[i].style.background = "red";
                }
            }  
        }

        rowCount++;

        }
});

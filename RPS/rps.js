document.addEventListener("DOMContentLoaded", () => {

    function getComputerChoice(){
        return  (Math.floor(Math.random()* 3) + 1);
    }

    let userChoice = 0;
    let winner = "unknown";
    let round = 0;

    const rock = document.querySelector("#rockButton");
    const paper = document.querySelector("#paperButton");
    const scissors = document.querySelector("#scissorsButton");

    const cir1 = document.querySelector("#cir1");
    const cir2 = document.querySelector("#cir2");
    const cir3 = document.querySelector("#cir3");
    const cir4 = document.querySelector("#cir4");
    const cir5 = document.querySelector("#cir5");

    rock.onclick = () => playGame(1,round); //rock is 1 
    paper.onclick = () => playGame(2,round);//paper is 2
    scissors.onclick = () => playGame(3,round);//scissors is 3

    rock.addEventListener("mouseover", () => (rock.style.borderColor = "lightBlue"))
    rock.addEventListener("mouseout", decreaseSizeRock)

    function decreaseSizeRock(){
        rock.style.borderColor = "black"
    }

    paper.addEventListener("mouseover", increaseSizePaper)
    paper.addEventListener("mouseout", decreaseSizePaper)

    function increaseSizePaper(){
        paper.style.borderColor = "lightBlue";
    }
    function decreaseSizePaper(){
        paper.style.borderColor = "black"
    }

    scissors.addEventListener("mouseover", () => (scissors.style.borderColor = "lightBlue"))
    scissors.addEventListener("mouseout", () => (scissors.style.borderColor = "black"))

    function changeColor(winner,round){
    console.log(winner + " this is the winner")
    console.log(round+ " this is the round")
        if(round === 1){
            if(winner == "user")
                {
                    cir1.style.backgroundColor = "green";
                }
            if(winner == "draw"){
                cir1.style.backgroundColor = "white";
            }
            if(winner == "comp"){
                cir1.style.backgroundColor = "red";
            }
        }
        if(round === 2){
            if(winner == "user")
                {
                    cir2.style.backgroundColor = "green";
                }
            if(winner == "draw"){
                cir2.style.backgroundColor = "white";
            }
            if(winner == "comp"){
                cir2.style.backgroundColor = "red";
            }
        }
        if(round === 3){
            if(winner == "user")
                {
                    cir3.style.backgroundColor = "green";
                }
            if(winner == "draw"){
                cir3.style.backgroundColor = "white";
            }
            if(winner == "comp"){
                cir3.style.backgroundColor = "red";
            }
        }
        if(round === 4){
            if(winner == "user")
                {
                    cir4.style.backgroundColor = "green";
                }
            if(winner == "draw"){
                cir4.style.backgroundColor = "white";
            }
            if(winner == "comp"){
                cir4.style.backgroundColor = "red";
            }
        }
        if(round === 5){
            if(winner == "user")
                {
                    cir5.style.backgroundColor = "green";
                }
            if(winner == "draw"){
                cir5.style.backgroundColor = "white";
            }
            if(winner == "comp"){
                cir5.style.backgroundColor = "red";
            }
        }
        
    }

    function playGame(choice){
        userChoice = choice;
        const compChoice = getComputerChoice()
        console.log("This what the user choice is giong into playGame() " + userChoice)
        console.log("This what the computer choice is giong into playGame() " + compChoice);
        if(compChoice == 1 && userChoice == 1) //rock vs rock
            {
                winner = "draw";

            }
            if(compChoice == 2 && userChoice == 2) //paper vs paper
            {
                winner = "draw";
            }
            if(compChoice == 3 && userChoice == 3) //scissors
            {
                winner = "draw";
            }
            if(compChoice == 1 && userChoice == 2) //rock vs paper
            {
                winner = "user"
            }
            if(compChoice == 1 && userChoice == 3)//rock vs scissors
            {
                winner = "comp";
            }
            if(compChoice == 2 && userChoice == 1)//paper vs rock
            {
                winner = "comp";
            }
            if(compChoice == 2 && userChoice == 3) // paper vs scissors
            {
                winner = "user";
            }
            if(compChoice == 3 && userChoice == 1) //scissors vs rock 
            {
                winner = "user"
            }
            if(compChoice == 3 && userChoice == 2)//scissors vs paper
            {
                winner = "comp";
            }
            round+=1;
            changeColor(winner,round)
        }
            //rock 1 
            //paper 2
            //sccisors 3
    }
);
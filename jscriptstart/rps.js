//rock == 1
//paper == 2
//scissors == 3

function getComputerChoice(){
    return  (Math.floor(Math.random()* 3) + 1);
}

let compChoice = getComputerChoice();
console.log(compChoice);

function getHumanChoice(){
    let valid = true
    while (valid == true){
        let humanAns = prompt("Choice rock, paper, or scissors");
        let lowerHum = humanAns.toLowerCase()
        if (lowerHum == "rock"){
            return 1;
        }
        if(lowerHum == "paper"){
            return 2;
        }
        if(lowerHum == "scissors"){
            return 3;
        }
        else{
            valid = false;
            console.log("not valid answer")
        }
    }
}

hum = getHumanChoice();
console.log(hum)

if(compChoice == 1 && hum == 1)
{
    console.log("tie")
}
if(compChoice == 2 && hum == 2)
{
    console.log("tie")
}
if(compChoice == 3 && hum == 3)
{
    console.log("tie")
}
if(compChoice == 1 && hum == 2)
{
    console.log("win")
}
if(compChoice == 1 && hum == 3)
{
    console.log("lose")
}
if(compChoice == 2 && hum == 1)
{
    console.log("lose")
}
if(compChoice == 2 && hum == 3)
{
    console.log("lose")
}
if(compChoice == 3 && hum == 1)
{
    console.log("win")
}
if(compChoice == 3 && hum == 2)
{
    console.log("lose")
}
    

//rock == 1
//paper == 2
//scissors == 3
document.addEventListener("DOMContentLoaded", () => {

    function getComputerChoice(){
        return  (Math.floor(Math.random()* 3) + 1);
    }

    let compChoice = getComputerChoice();
    console.log(compChoice);

    const rock = document.querySelector("#rockButton");
    rock.onclick = () => console.log("this ones in the console");

    rock.addEventListener("mouseover", increaseSize)

    rock.addEventListener("mouseout", decreaseSize)

    function increaseSize(){
        rock.style.width = "150px";
        rock.style.height = "150px";
    }

    function decreaseSize(){
        rock.style.width = "100px";
        rock.style.height = "100px";
    }

});
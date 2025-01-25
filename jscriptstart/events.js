document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("#btn"); //you can't repeat btn
    btn.onclick = () => console.log("this ones in the console");

    const bt = document.querySelector("#bt");
    bt.onclick = () => alert("this one is an alert")

    const b = document.querySelector("#b");
    b.addEventListener("click", () => {
        alert("Hello World");
    });


    function alertFunction(){
        console.log("this function worked")
    }
    
    const a = document.querySelector("#a");
    
    //method 2
    a.onclick = alertFunction;
    
    //method 3
    a.addEventListener("click", alertFunction);

    btn.addEventListener("click", function (e)
    {
        console.log(e);
    });

    btn.addEventListener("click", function (e)
    {
        console.log(e.target);
    });

    btn.addEventListener("click", function (e){
        e.target.style.background = "blue";
    })

    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
    });

    const hov = document.querySelector("#hov");

    hov.addEventListener("mouseover", makeRed)

    hov.addEventListener("mouseout", makeBlue)

    function makeRed(){
        hov.style.background = "red";
    }

    function makeBlue(){
        hov.style.background = "blue"
    }


        // Get references to DOM elements
    const textbox = document.querySelector("#textbox");
    const addButton = document.querySelector("#addButton");
    const list = document.querySelector("#list");

    // Array to store the list items
    const items = [];

    // Add button event listener
    addButton.addEventListener("click", () => {
        const text = textbox.value.trim(); // Get input and trim whitespace
        if (text !== "") {
            items.push(text); // Add input to the array
            updateList();     // Update the displayed list
            textbox.value = ""; // Clear the input
            textbox.focus();    // Focus back on the input
        } else {
            alert("Please enter some text before adding!");
        }
    });

    // Function to update the list
    function updateList() {
        list.innerHTML = ""; // Clear the current list
    
        items.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${item}`;
    
            // Create delete button for the list item
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.marginLeft = "10px";
            deleteButton.style.cursor = "pointer";
    
            // Add event listener to delete the item
            deleteButton.addEventListener("click", () => {
                items.splice(index, 1); // Remove the item from the array
                updateList(); // Refresh the list
            });
    
            // Append the delete button to the list item
            listItem.appendChild(deleteButton);
    
            // Append the list item to the list
            list.appendChild(listItem);
        });
    }

    const container2 = document.querySelector("#container2");
const draggable = document.querySelector("#draggable");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Mouse down event to start dragging
draggable.addEventListener("mousedown", (e) => {
    isDragging = true;

    // Calculate the offset of the click within the draggable box
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;

    draggable.style.cursor = "grabbing";
});

// Mouse move event to move the box
container2.addEventListener("mousemove", (e) => {
    if (isDragging) {
        // Calculate new position of the box relative to the container
        let newX = e.clientX - container2.getBoundingClientRect().left - offsetX;
        let newY = e.clientY - container2.getBoundingClientRect().top - offsetY;

        // Prevent the box from moving outside container bounds
        const maxX = container2.offsetWidth - draggable.offsetWidth;
        const maxY = container2.offsetHeight - draggable.offsetHeight;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        // Update the draggable element's position
        draggable.style.left = `${newX}px`;
        draggable.style.top = `${newY}px`;
    }
});

// Mouse up event to stop dragging
document.addEventListener("mouseup", () => {
    isDragging = false;
    draggable.style.cursor = "grab";
});


    const drag = document.querySelector("#drag");
    let isDrag = false;
    let offX = 0;
    let offY = 0;
    drag.addEventListener("mousedown", (e) => {
        isDrag = true;

        offX = e.clientX-drag.getBoundingClientRect().left;
        offY = e.clientY-drag.getBoundingClientRect().top;

        drag.style.cursor = "grabbing";

    });

    document.addEventListener("mousemove", (e) => {
        if (isDrag){
            const newX = e.clientX-offX;
            const newY = e.clientY-offY;

            drag.style.left = `${newX}px`;
            drag.style.top = `${newY}px`;
        }

    })

    document.addEventListener("mouseup", () => {
        isDrag = false;
        drag.style.cursor = "grab";

    });
    
    let posX = 100;
    let posY = 100;

    const moveSpeed = 10;

    document.addEventListener("keydown", (e) => {
        if(e.key === "w"){
            posY -=moveSpeed;
        }
        if(e.key === "a"){
            posX -=moveSpeed;
        }
        if(e.key === "s"){
            posY +=moveSpeed;
        }
        if(e.key === "d"){
            posX +=moveSpeed;
        }

        drag.style.left = `${posX}px`;
        drag.style.top = `${posY}px`;
    })
    

});



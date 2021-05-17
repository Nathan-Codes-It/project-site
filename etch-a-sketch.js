const buttonChoice = document.querySelector(".button");
const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector(".reset");
const colorBlue = document.querySelector("#colorSelector");
 
buttonChoice.addEventListener("click", () => {
    let numOfTimes = prompt("gridsize");
    gridContainer.innerHTML="";
    draw(numOfTimes);

});
function draw(numOfTimes){
    for (let j = 0; j<numOfTimes;j++){
        let rowContainer = document.createElement("div");
        for(let i = 0;i<numOfTimes;i++){
            const singleCell = document.createElement("div");
            singleCell.textContent=".";
            singleCell.style.color="dimgrey";
            singleCell.classList.add("bg-red")
            singleCell.classList.add("grid")  
            singleCell.addEventListener("mouseover", () => {
                singleCell.style.background="#2f525d ";  
                singleCell.style.color="#2f525d"; 
            });
            rowContainer.appendChild(singleCell);
        }
        gridContainer.appendChild(rowContainer);
    }
}
    


resetButton.addEventListener("click", () =>{
    gridContainer.innerHTML="";
    draw(16);
    });


//  let numOfTimes = prompt("grid size?");
 

draw(16);
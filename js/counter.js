let rock1 = 0;
let paper1 = 0;
let scissors1 = 0;
let wrap1 = 0;
let modal1 = 0;
let cont1 = 0;
let shop1 = 0;
let item1 = 0;
let content1 = 0;
let popup1 = 0;
let acar1 = 0;
let show1 = 0;
let total1 = rock1 + paper1 + scissors1 + wrap1 + modal1 + cont1 + shop1 + item1 + content1 + popup1 + acar1 + show1;

const rPlus1 = document.querySelector(".add1");
const rMinus1 = document.querySelector(".minus1");




// Functions
function updateRock1(displayRock1) {
    let rock1 = document.querySelector(".r1");
    rock1.innerHTML = displayRock1;
}


// Event Listeners
rPlus1.addEventListener("click", function (e) {
    e.preventDefault()
    rock1++;
    total1++;
    updateRock1(`${rock1}`);
});
rMinus1.addEventListener("click", function (e) {
    e.preventDefault()
    if (rock1 > 0) {
        rock1--;
        total1--;
    }
    updateRock1(`${rock1}`);
});

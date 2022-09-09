// Variables
let rock = 0;
let paper = 0;
let scissors = 0;
let wrap = 0;
let modal = 0;
let cont = 0;
let shop = 0;
let item = 0;
let content = 0;
let popup = 0;
let acar = 0;
let show = 0;
let total = rock + paper + scissors + wrap + modal + cont + shop + item + content + popup + acar + show;

const rPlus = document.querySelector(".add-r");
const rMinus = document.querySelector(".minus-r");
const pPlus = document.querySelector(".add-p");
const pMinus = document.querySelector(".minus-p");
const sPlus = document.querySelector(".add-s");
const sMinus = document.querySelector(".minus-s");
const wMinus = document.querySelector(".minus-rw")
const wPlus = document.querySelector(".add-w")
const xMinus = document.querySelector(".minus-x")
const xPlus = document.querySelector(".add-x")
const xMinus1 = document.querySelector(".minus-x1")
const xPlus1 = document.querySelector(".add-x1")
const xMinus2 = document.querySelector(".minus-x2")
const xPlus2 = document.querySelector(".add-x2")
const xMinus3 = document.querySelector(".minus-x3")
const xPlus3 = document.querySelector(".add-x3")
const xMinus4 = document.querySelector(".minus-x4")
const xPlus4 = document.querySelector(".add-x4")
const xMinus5 = document.querySelector(".minus-x5")
const xPlus5 = document.querySelector(".add-x5")
const xMinus6 = document.querySelector(".minus-x6")
const xPlus6 = document.querySelector(".add-x6")
const xMinus7 = document.querySelector(".minus-x7")
const xPlus7 = document.querySelector(".add-x7")



// Functions
function updateRock(displayRock) {
    let rock = document.querySelector(".r-total");
    rock.innerHTML = displayRock;
}
function updateWrap(displayWrap) {
    let wrap = document.querySelector(".w-total");
    wrap.innerHTML = displayWrap;
}
function updatePaper(displayPaper) {
    let paper = document.querySelector(".p-total");
    paper.innerHTML = displayPaper;
}
function updateScissors(displayScissors) {
    let scissors = document.querySelector(".s-total");
    scissors.innerHTML = displayScissors;
}

function updateRock1(displayRock1) {
    let modal = document.querySelector(".r-total1");
    modal.innerHTML = displayRock1;
}
function updateRock2(displayRock2) {
    let cont = document.querySelector(".r-total2");
    cont.innerHTML = displayRock2;
}

function updateRock3(displayRock3) {
    let shop = document.querySelector(".r-total3");
    shop.innerHTML = displayRock3;
}
function updateRock4(displayRock4) {
    let item = document.querySelector(".r-total4");
    item.innerHTML = displayRock4;
}
function updateRock5(displayRock5) {
    let content = document.querySelector(".r-total5");
    content.innerHTML = displayRock5;
}
function updateRock6(displayWrap6) {
    let popup = document.querySelector(".w-total6");
    popup.innerHTML = displayWrap6;
}
function updateRock7(updateRock7) {
    let acar = document.querySelector(".p-total7");
    acar.innerHTML = updateRock7;
}
function updateRock8(updateRock8) {
    let show = document.querySelector(".s-total8");
    show.innerHTML = updateRock8;
}

// Event Listeners
rPlus.addEventListener("click", function () {
    rock++;
    total++;
    updateRock(`${rock}`);
});
rMinus.addEventListener("click", function (e) {
    if (rock > 0) {
        rock--;
        total--;
    }
    updateRock(`${rock}`);
});
pPlus.addEventListener("click", function () {
    paper++;
    total++;
    updatePaper(`${paper}`);
});
pMinus.addEventListener("click", function (e) {
    if (paper > 0) {
        paper--;
        total--;
    }
    updatePaper(`${paper}`);
});
sPlus.addEventListener("click", function () {
    scissors++;
    total++;
    updateScissors(`${scissors}`);
});
sMinus.addEventListener("click", function (e) {
    if (scissors > 0) {
        scissors--;
        total--;
    }
    updateScissors(`${scissors}`);
});
wPlus.addEventListener("click", function () {
    wrap++;
    total++;
    updateWrap(`${wrap}`);
});
wMinus.addEventListener("click", function (e) {
    if (cont > 0) {
        wrap--;
        total--;
    }
    updateWrap(`${wrap}`);
});




xPlus.addEventListener("click", function () {
    modal++;
    total++;
    updateRock1(`${modal}`);
});
xMinus.addEventListener("click", function (e) {
    if (modal > 0) {
        modal--;
        total--;
    }
    updateRock1(`${modal}`);
});


xPlus1.addEventListener("click", function () {
    cont++;
    total++;
    updateRock2(`${cont}`);
});
xMinus1.addEventListener("click", function (e) {
    if (cont > 0) {
        cont--;
        total--;
    }
    updateRock2(`${cont}`);
});


xPlus2.addEventListener("click", function () {
    shop++;
    total++;
    updateRock3(`${shop}`);
});
xMinus2.addEventListener("click", function (e) {
    if (shop > 0) {
        shop--;
        total--;
    }
    updateRock3(`${shop}`);
});


xPlus3.addEventListener("click", function () {
    item++;
    total++;
    updateRock4(`${item}`);
});
xMinus3.addEventListener("click", function (e) {
    if (item > 0) {
        item--;
        total--;
    }
    updateRock4(`${item}`);
});


xPlus4.addEventListener("click", function () {
    content++;
    total++;
    updateRock5(`${content}`);
});
xMinus4.addEventListener("click", function (e) {
    if (content > 0) {
        content--;
        total--;
    }
    updateRock5 (`${content}`);
});


xPlus5.addEventListener("click", function () {
    popup++;
    total++;
    updateRock6(`${popup}`);
});
xMinus5.addEventListener("click", function (e) {
    if (popup > 0) {
        popup--;
        total--;
    }
    updateRock6(`${popup}`);
});


xPlus6.addEventListener("click", function () {
    acar++;
    total++;
    updateRock7(`${acar}`);
});
xMinus6.addEventListener("click", function (e) {
    if (acar > 0) {
        acar--;
        total--;
    }
    updateRock7(`${acar}`);
});

xPlus7.addEventListener("click", function () {
    show++;
    total++;
    updateRock8(`${show}`);
});
xMinus7.addEventListener("click", function (e) {
    if (show > 0) {
        show--;
        total--;
    }
    updateRock8(`${show}`);
});


const openPopUp1 = document.querySelector('.open_pop_up1');
const openPopUp2 = document.querySelector('.open_pop_up2');
const openPopUp3 = document.querySelector('.open_pop_up3');
const openPopUp4 = document.querySelector('.open_pop_up4');
const openPopUp5 = document.querySelector('.open_pop_up5');
const openPopUp6 = document.querySelector('.open_pop_up6');
const openPopUp7 = document.querySelector('.open_pop_up7');
const openPopUp8 = document.querySelector('.open_pop_up8');
const openPopUp9 = document.querySelector('.open_pop_up9');
const openPopUp10 = document.querySelector('.open_pop_up10');
const openPopUp11 = document.querySelector('.open_pop_up11');
const openPopUp12 = document.querySelector('.open_pop_up12');
const closePopUp1 = document.querySelector('.pop_up_close1');
const closePopUp2 = document.querySelector('.pop_up_close2');
const closePopUp3 = document.querySelector('.pop_up_close3');
const closePopUp4 = document.querySelector('.pop_up_close4');
const closePopUp5 = document.querySelector('.pop_up_close5');
const closePopUp6 = document.querySelector('.pop_up_close6');
const closePopUp7 = document.querySelector('.pop_up_close7');
const closePopUp8 = document.querySelector('.pop_up_close8');
const closePopUp9 = document.querySelector('.pop_up_close9');
const closePopUp10 = document.querySelector('.pop_up_close10');
const closePopUp11 = document.querySelector('.pop_up_close11');
const closePopUp12 = document.querySelector('.pop_up_close12');
const popUp1 = document.querySelector('.pop_up1');
const popUp2 = document.querySelector('.pop_up2');
const popUp3 = document.querySelector('.pop_up3');
const popUp4 = document.querySelector('.pop_up4');
const popUp5 = document.querySelector('.pop_up5');
const popUp6 = document.querySelector('.pop_up6');
const popUp7 = document.querySelector('.pop_up7');
const popUp8 = document.querySelector('.pop_up8');
const popUp9 = document.querySelector('.pop_up9');
const popUp10 = document.querySelector('.pop_up10');
const popUp11 = document.querySelector('.pop_up11');
const popUp12 = document.querySelector('.pop_up12');


openPopUp1.addEventListener('click', function(e) {
    e.preventDefault();
    popUp1.classList.add('active');
})
openPopUp2.addEventListener('click', function(e) {
    e.preventDefault();
    popUp2.classList.add('active');
})
openPopUp3.addEventListener('click', function(e) {
    e.preventDefault();
    popUp3.classList.add('active');
})
openPopUp4.addEventListener('click', function(e) {
    e.preventDefault();
    popUp4.classList.add('active');
})
openPopUp5.addEventListener('click', function(e) {
    e.preventDefault();
    popUp5.classList.add('active');
})
openPopUp6.addEventListener('click', function(e) {
    e.preventDefault();
    popUp6.classList.add('active');
})
openPopUp7.addEventListener('click', function(e) {
    e.preventDefault();
    popUp7.classList.add('active');
})
openPopUp8.addEventListener('click', function(e) {
    e.preventDefault();
    popUp8.classList.add('active');
})
openPopUp9.addEventListener('click', function(e) {
    e.preventDefault();
    popUp9.classList.add('active');
})
openPopUp10.addEventListener('click', function(e) {
    e.preventDefault();
    popUp10.classList.add('active');
})
openPopUp11.addEventListener('click', function(e) {
    e.preventDefault();
    popUp11.classList.add('active');
})
openPopUp12.addEventListener('click', function(e) {
    e.preventDefault();
    popUp12.classList.add('active');
})

closePopUp1.addEventListener('click', () => {
    popUp1.classList.remove('active')
})
closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active')
})
closePopUp3.addEventListener('click', () => {
    popUp3.classList.remove('active')
})
closePopUp4.addEventListener('click', () => {
    popUp4.classList.remove('active')
})
closePopUp5.addEventListener('click', () => {
    popUp5.classList.remove('active')
})
closePopUp6.addEventListener('click', () => {
    popUp6.classList.remove('active')
})
closePopUp7.addEventListener('click', () => {
    popUp7.classList.remove('active')
})
closePopUp8.addEventListener('click', () => {
    popUp8.classList.remove('active')
})
closePopUp9.addEventListener('click', () => {
    popUp9.classList.remove('active')
})
closePopUp10.addEventListener('click', () => {
    popUp10.classList.remove('active')
})
closePopUp11.addEventListener('click', () => {
    popUp11.classList.remove('active')
})
closePopUp12.addEventListener('click', () => {
    popUp12.classList.remove('active')
})

let yt = document.querySelector('.yt')
let yt2 = document.querySelector('.yt2')

yt.addEventListener('click', (e) => {
    e.preventDefault()
})
yt2.addEventListener('click', (e) => {
    e.preventDefault()
})

let wr = document.querySelector('.wrapper-28')

wr.classList.toggle('dn')

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), wr.classList.remove('dn'), wr.classList.toggle('db'),
                parseInt(p.css('--duration')) * 100

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);

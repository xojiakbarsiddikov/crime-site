let ul = document.querySelector(".ul-1")
let popup_div = document.querySelector(".popup_inside_div")
let li1 = document.querySelector(".li-1")
let li2 = document.querySelector(".li-2")
let li3 = document.querySelector(".li-3")
let li4 = document.querySelector(".li-4")
let li5 = document.querySelector(".li-5")
let li6 = document.querySelector(".li-6")
let li1Div = document.querySelector(".li-1-div")
let li2Div = document.querySelector(".li-2-div")
let li3Div = document.querySelector(".li-3-div")
let li4Div = document.querySelector(".li-4-div")
let li5Div = document.querySelector(".li-5-div")
let li6Div = document.querySelector(".li-6-div")

li1.addEventListener("click", () => {
        li1.classList.add("red_rectangle")
        li1Div.classList.add("active-li-div")
        li2Div.classList.remove("active-li-div")
        li3Div.classList.remove("active-li-div")
        li4Div.classList.remove("active-li-div")
        li5Div.classList.remove("active-li-div")
        li6Div.classList.remove("active-li-div")
        li2.classList.remove("red_rectangle")
        li3.classList.remove("red_rectangle")
        li4.classList.remove("red_rectangle")
        li5.classList.remove("red_rectangle")
        li6.classList.remove("red_rectangle")
})

li2.addEventListener("click", () => {
    li2.classList.add("red_rectangle")
    li2Div.classList.add("active-li-div")
    li1Div.classList.remove("active-li-div")
    li3Div.classList.remove("active-li-div")
    li4Div.classList.remove("active-li-div")
    li5Div.classList.remove("active-li-div")
    li6Div.classList.remove("active-li-div")
    li1.classList.remove("red_rectangle")
    li3.classList.remove("red_rectangle")
    li4.classList.remove("red_rectangle")
    li5.classList.remove("red_rectangle")
    li6.classList.remove("red_rectangle")
})

li3.addEventListener("click", () => {
    li3.classList.add("red_rectangle")
    li3Div.classList.add("active-li-div")
    li1Div.classList.remove("active-li-div")
    li2Div.classList.remove("active-li-div")
    li4Div.classList.remove("active-li-div")
    li5Div.classList.remove("active-li-div")
    li6Div.classList.remove("active-li-div")
    li1.classList.remove("red_rectangle")
    li2.classList.remove("red_rectangle")
    li4.classList.remove("red_rectangle")
    li5.classList.remove("red_rectangle")
    li6.classList.remove("red_rectangle")
})

li4.addEventListener("click", () => {
    li4.classList.add("red_rectangle")
    li4Div.classList.add("active-li-div")
    li2Div.classList.remove("active-li-div")
    li3Div.classList.remove("active-li-div")
    li1Div.classList.remove("active-li-div")
    li5Div.classList.remove("active-li-div")
    li6Div.classList.remove("active-li-div")
    li1.classList.remove("red_rectangle")
    li2.classList.remove("red_rectangle")
    li3.classList.remove("red_rectangle")
    li5.classList.remove("red_rectangle")
    li6.classList.remove("red_rectangle")
})

li5.addEventListener("click", () => {
    li5.classList.add("red_rectangle")
    li5Div.classList.add("active-li-div")
    li1Div.classList.remove("active-li-div")
    li2Div.classList.remove("active-li-div")
    li3Div.classList.remove("active-li-div")
    li4Div.classList.remove("active-li-div")
    li6Div.classList.remove("active-li-div")
    li1.classList.remove("red_rectangle")
    li2.classList.remove("red_rectangle")
    li3.classList.remove("red_rectangle")
    li4.classList.remove("red_rectangle")
    li6.classList.remove("red_rectangle")
})


li6.addEventListener("click", () => {
    li6.classList.add("red_rectangle")
    li6Div.classList.add("active-li-div")
    li1Div.classList.remove("active-li-div")
    li2Div.classList.remove("active-li-div")
    li3Div.classList.remove("active-li-div")
    li4Div.classList.remove("active-li-div")
    li5Div.classList.remove("active-li-div")
    ul.classList.add("dn")
    popup_div.classList.add("bg-to-popup")
})

/*Dropdown Menu*/
        const customSelect = document.querySelector(".custom-select");
        const selectDisplay = customSelect.querySelector(".custom-select__display");
        const selectOptions = customSelect.querySelector(".custom-select__options");
        const selectOptionItems = selectOptions.querySelectorAll("li");
        const selectDisplayValue = selectDisplay.querySelector(
            ".custom-select__display__value"
        );

        selectDisplay.addEventListener("click", () => {
            selectOptions.classList.add("active");
            selectOptions.focus();
        });

        selectOptions.addEventListener("blur", () => {
            selectOptions.classList.remove("active");
        });

        selectOptionItems.forEach((el) => {
            el.addEventListener("click", (evt) => {
                selectDisplayValue.innerHTML = evt.target.innerHTML;
                selectOptions.classList.remove("active");
                selectOptions.blur();
            });
        })


const customSelect1 = document.querySelector(".custom-select1");
const selectDisplay1 = document.querySelector(".custom-select__display1");
const selectOptions1 = document.querySelector(".custom-select__options1");
const selectOptionItems1 = selectOptions1.querySelectorAll("li");
const selectDisplayValue1 = document.querySelector(
    ".custom-select__display__value1"
);

selectDisplay1.addEventListener("click", () => {
    selectOptions1.classList.add("active");
    selectOptions1.focus();
});

selectOptions1.addEventListener("blur", () => {
    selectOptions1.classList.remove("active");
});

selectOptionItems1.forEach((el) => {
    el.addEventListener("click", (evt) => {
        console.log(evt.target)
        selectDisplayValue1.innerHTML = evt.target.innerHTML;
        selectOptions1.classList.remove("active");
        selectOptions1.blur();
    });
})


const customSelect2 = document.querySelector(".custom-select2");
const selectDisplay2 = document.querySelector(".custom-select__display2");
const selectOptions2 = document.querySelector(".custom-select__options2");
const selectOptionItems2 = selectOptions2.querySelectorAll("li");
const selectDisplayValue2 = document.querySelector(
    ".custom-select__display__value2"
);

selectDisplay2.addEventListener("click", () => {
    selectOptions2.classList.add("active");
    selectOptions2.focus();
});

selectOptions2.addEventListener("blur", () => {
    selectOptions2.classList.remove("active");
});

selectOptionItems2.forEach((el) => {
    el.addEventListener("click", (evt) => {
        console.log(item.target)
        selectDisplayValue2.innerHTML = evt.target.innerHTML;
        selectOptions2.classList.remove("active");
        selectOptions2.blur();
    });
})







let preloader_cash_out = document.querySelector('.preloader_cash_out')

preloader_cash_out.classList.toggle('dn')

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), preloader_cash_out.classList.remove('dn'),preloader_cash_out.classList.toggle('db'),
                parseInt(p.css('--duration')) * 1000

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);
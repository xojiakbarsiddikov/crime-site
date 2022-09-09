// Border
const chat = document.querySelector('.chats')
const card = document.querySelector('.card')
const person = document.querySelector('.person')
const history = document.querySelector('.history')
const settings = document.querySelector('.settings')
const exit = document.querySelector('.exit')

// Pages
const chatDetails = document.querySelector('.cards-profile')
const cardDetails = document.querySelector('.cards-page')
const personDetails = document.querySelector('.wr')
const historyDetails = document.querySelector('.wp')
const settingsDetails = document.querySelector('.settings_page')


let wp_2 = document.querySelector('.wp-2')
let content__23 = document.querySelector('.content__23')
let chat_container = document.querySelector('.chat-container')
let open_pop_up11 = document.querySelectorAll('.chat-profile')
let click__ew = document.querySelector('.click__ew')
let container143 = document.querySelector('.container143')


open_pop_up11.forEach(element => {
    element.addEventListener('click',function() {
        chat_container.style.display="block"
        chatDetails.style.display="none"
    })
});

content__23.addEventListener('click',function() {
    chat_container.style.display="none"
    chatDetails.style.display="block"
})



chat.addEventListener('click',function() {

    // Border
    card.classList.remove('active_sidebar')
    person.classList.remove('active_sidebar')
    history.classList.remove('active_sidebar')
    settings.classList.remove('active_sidebar')
    exit.classList.remove('active_sidebar')
    chat.classList.add('active_sidebar')

    // Pages
    cardDetails.style.display="none"
    personDetails.style.display="none"
    historyDetails.style.display="none"
    settingsDetails.style.display="none"
    chat_container.style.display="none"

    chatDetails.style.display="block"
})


card.addEventListener('click',function() {
    chat.classList.remove('active_sidebar')
    person.classList.remove('active_sidebar')
    history.classList.remove('active_sidebar')
    settings.classList.remove('active_sidebar')
    exit.classList.remove('active_sidebar')
    card.classList.add('active_sidebar')


    chatDetails.style.display="none"
    personDetails.style.display="none"
    historyDetails.style.display="none"
    settingsDetails.style.display="none"
    chat_container.style.display="none"

    cardDetails.style.display="block"
})

person.addEventListener('click',function() {
    chat.classList.remove('active_sidebar')
    card.classList.remove('active_sidebar')
    history.classList.remove('active_sidebar')
    settings.classList.remove('active_sidebar')
    exit.classList.remove('active_sidebar')
    person.classList.add('active_sidebar')

    chatDetails.style.display="none"
    cardDetails.style.display="none"
    historyDetails.style.display="none"
    settingsDetails.style.display="none"
    chat_container.style.display="none"

    personDetails.style.display="block"

})
history.addEventListener('click',function() {
    chat.classList.remove('active_sidebar')
    card.classList.remove('active_sidebar')
    person.classList.remove('active_sidebar')
    settings.classList.remove('active_sidebar')
    exit.classList.remove('active_sidebar')
    history.classList.add('active_sidebar')

    chatDetails.style.display="none"
    cardDetails.style.display="none"
    personDetails.style.display="none"
    settingsDetails.style.display="none"
    chat_container.style.display="none"

    historyDetails.style.display="block"

})
settings.addEventListener('click',function() {
    chat.classList.remove('active_sidebar')
    card.classList.remove('active_sidebar')
    exit.classList.remove('active_sidebar')
    person.classList.remove('active_sidebar')
    history.classList.remove('active_sidebar')
    settings.classList.add('active_sidebar')

    chatDetails.style.display="none"
    cardDetails.style.display="none"
    personDetails.style.display="none"
    historyDetails.style.display="none"
    chat_container.style.display="none"

    settingsDetails.style.display="block"
})
exit.addEventListener('click',function() {
    chat.classList.remove('active_sidebar')
    card.classList.remove('active_sidebar')
    settings.classList.remove('active_sidebar')
    person.classList.remove('active_sidebar')
    history.classList.remove('active_sidebar')
    exit.classList.add('active_sidebar')
});


let password = document.querySelector(".password")
let email = document.querySelector(".email")
let nicname = document.querySelector(".nicname")
let google = document.querySelector(".google")
let passorddiv = document.querySelector(".all-password-setting")
let nicnamediv = document.querySelector(".all-nicname-setting")
let emaildiv = document.querySelector(".all-email-setting")
let googlediv = document.querySelector(".all-google-setting")


password.addEventListener("click", ()=> {
    password.classList.add("active_div_setting")
    passorddiv.classList.add("divs-db")

    emaildiv.classList.remove("divs-db")
    email.classList.remove("active_div_setting")

    nicname.classList.remove("active_div_setting")
    nicnamediv.classList.remove("divs-db")

    // googlediv.classList.remove("divs-db")


})

email.addEventListener("click", ()=> {
    email.classList.add("active_div_setting")
    emaildiv.classList.add("divs-db")

    passorddiv.classList.remove("divs-db")
    password.classList.remove("active_div_setting")

    nicnamediv.classList.remove("divs-db")
    nicname.classList.remove("active_div_setting")
})

nicname.addEventListener("click", ()=> {
    nicname.classList.add("active_div_setting")
    nicnamediv.classList.add("divs-db")

    passorddiv.classList.remove("divs-db")
    password.classList.remove("active_div_setting")

    email.classList.remove("active_div_setting")
    emaildiv.classList.remove("divs-db")
})


// google.addEventListener("click", ()=> {
//     google.classList.add("active_div_setting")
//     google.classList.add("divs-db")
//     passorddiv.classList.remove("divs-db")
//     email.classList.remove("divs-db")
//     googlediv.classList.remove("divs-db")
//     password.classList.remove("active_div_setting")
//     nicname.classList.remove("active_div_setting")
//     email.classList.remove("active_div_setting")
// })

// keregi bosa ishlatvorilar google f2





// Border
const chatMedia = document.querySelector('.chatsMedia')
const cardMedia = document.querySelector('.cardMedia')
const personMedia = document.querySelector('.personMedia')
const historyMedia = document.querySelector('.historyMedia')
const settingsMedia = document.querySelector('.settingsMedia')
const exitMedia = document.querySelector('.exitMedia')

// Pages
const chatDetailsMedia = document.querySelector('.cards-profileMedia')
const cardDetailsMedia = document.querySelector('.cards-pageMedia')
const personDetailsMedia = document.querySelector('.wrMedia')
const historyDetailsMedia = document.querySelector('.wpMedia')
const settingsDetailsMedia = document.querySelector('.settings_pageMedia')


let wp_2Media = document.querySelector('.wp-2Media')
let content__23Media = document.querySelector('.content__23Media')
let chat_containerMedia = document.querySelector('.chat-containerMedia')
let open_pop_up11Media = document.querySelectorAll('.chat-profileMedia')


open_pop_up11Media.forEach(element => {
    element.addEventListener('click',function() {
        chat_containerMedia.style.display="block"
        chatDetailsMedia.style.display="none"
    })
});

content__23Media.addEventListener('click',function() {
    chat_containerMedia.style.display="none"
    chatDetailsMedia.style.display="block"
})




chatMedia.addEventListener('click',function() {

    // Border
    cardMedia.classList.remove('active_sidebarMedia')
    personMedia.classList.remove('active_sidebarMedia')
    historyMedia.classList.remove('active_sidebarMedia')
    settingsMedia.classList.remove('active_sidebarMedia')
    exitMedia.classList.remove('active_sidebarMedia')
    chatMedia.classList.add('active_sidebarMedia')

    // Pages
    cardDetailsMedia.style.display="none"
    personDetailsMedia.style.display="none"
    historyDetailsMedia.style.display="none"
    settingsDetailsMedia.style.display="none"
    chat_containerMedia.style.display="none"

    chatDetailsMedia.style.display="block"
})


cardMedia.addEventListener('click',function() {
    chatMedia.classList.remove('active_sidebarMedia')
    personMedia.classList.remove('active_sidebarMedia')
    historyMedia.classList.remove('active_sidebarMedia')
    settingsMedia.classList.remove('active_sidebarMedia')
    exitMedia.classList.remove('active_sidebarMedia')
    cardMedia.classList.add('active_sidebarMedia')


    chatDetailsMedia.style.display="none"
    personDetailsMedia.style.display="none"
    historyDetailsMedia.style.display="none"
    settingsDetailsMedia.style.display="none"
    chat_containerMedia.style.display="none"

    cardDetailsMedia.style.display="block"
})

personMedia.addEventListener('click',function() {
    chatMedia.classList.remove('active_sidebarMedia')
    cardMedia.classList.remove('active_sidebarMedia')
    historyMedia.classList.remove('active_sidebarMedia')
    settingsMedia.classList.remove('active_sidebarMedia')
    exitMedia.classList.remove('active_sidebarMedia')
    personMedia.classList.add('active_sidebarMedia')

    chatDetailsMedia.style.display="none"
    cardDetailsMedia.style.display="none"
    historyDetailsMedia.style.display="none"
    settingsDetailsMedia.style.display="none"
    chat_containerMedia.style.display="none"

    personDetailsMedia.style.display="block"

})
historyMedia.addEventListener('click',function() {
    chatMedia.classList.remove('active_sidebarMedia')
    cardMedia.classList.remove('active_sidebarMedia')
    personMedia.classList.remove('active_sidebarMedia')
    settingsMedia.classList.remove('active_sidebarMedia')
    exitMedia.classList.remove('active_sidebarMedia')
    historyMedia.classList.add('active_sidebarMedia')

    chatDetailsMedia.style.display="none"
    cardDetailsMedia.style.display="none"
    personDetailsMedia.style.display="none"
    settingsDetailsMedia.style.display="none"
    chat_containerMedia.style.display="none"

    historyDetailsMedia.style.display="block"

})
settingsMedia.addEventListener('click',function() {
    chatMedia.classList.remove('active_sidebarMedia')
    cardMedia.classList.remove('active_sidebarMedia')
    exitMedia.classList.remove('active_sidebarMedia')
    personMedia.classList.remove('active_sidebarMedia')
    historyMedia.classList.remove('active_sidebarMedia')
    settingsMedia.classList.add('active_sidebarMedia')

    chatDetailsMedia.style.display="none"
    cardDetailsMedia.style.display="none"
    personDetailsMedia.style.display="none"
    historyDetailsMedia.style.display="none"
    chat_containerMedia.style.display="none"

    settingsDetailsMedia.style.display="block"
})
exitMedia.addEventListener('click',function() {
    chatMedia.classList.remove('active_sidebarMedia')
    cardMedia.classList.remove('active_sidebarMedia')
    settingsMedia.classList.remove('active_sidebarMedia')
    personMedia.classList.remove('active_sidebarMedia')
    historyMedia.classList.remove('active_sidebarMedia')
    exitMedia.classList.add('active_sidebarMedia')
});



let passwordMedia = document.querySelector(".passwordMedia")
let emailMedia = document.querySelector(".emailMedia")
let nicnameMedia = document.querySelector(".nicnameMedia")
let googleMedia = document.querySelector(".googleMedia")
let passorddivMedia = document.querySelector(".all-password-settingMedia")
let nicnamedivMedia = document.querySelector(".all-nicname-settingMedia")
let emaildivMedia = document.querySelector(".all-email-settingMedia")
let googledivMedia = document.querySelector(".all-google-settingMedia")


passwordMedia.addEventListener("click", ()=> {
    passwordMedia.classList.add("active_div_settingMedia")
    passorddivMedia.classList.add("divs-dbMedia")

    emaildivMedia.classList.remove("divs-dbMedia")
    emailMedia.classList.remove("active_div_settingMedia")

    nicnameMedia.classList.remove("active_div_settingMedia")
    nicnamedivMedia.classList.remove("divs-dbMedia")

    // googlediv.classList.remove("divs-db")


})

emailMedia.addEventListener("click", ()=> {
    emailMedia.classList.add("active_div_settingMedia")
    emaildivMedia.classList.add("divs-dbMedia")

    passorddivMedia.classList.remove("divs-dbMedia")
    passwordMedia.classList.remove("active_div_settingMedia")

    nicnamedivMedia.classList.remove("divs-dbMedia")
    nicnameMedia.classList.remove("active_div_settingMedia")
})

nicnameMedia.addEventListener("click", ()=> {
    nicnameMedia.classList.add("active_div_settingMedia")
    nicnamedivMedia.classList.add("divs-dbMedia")

    passorddivMedia.classList.remove("divs-dbMedia")
    passwordMedia.classList.remove("active_div_settingMedia")

    emailMedia.classList.remove("active_div_settingMedia")
    emaildivMedia.classList.remove("divs-dbMedia")
})

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-tab-question]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (btn) {

            let abaAlvo = btn.target.dataset.tabButton;

            let aba = document.querySelector(`[data-tab-id = ${abaAlvo} ]`);
            removeClass()
            aba.classList.add("shows__items--is-active")

        })
    }


    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", responseOpen)

    }

});

function responseOpen(elemento) {
    const classe = 'faq__questions__item--is-open'

    const elementDaddy = elemento.target.parentNode;
    elementDaddy.classList.toggle(classe)
}


function removeClass() {
    const tabId = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabId.length; i++) {
        tabId[i].classList.remove("shows__items--is-active");
    }
}


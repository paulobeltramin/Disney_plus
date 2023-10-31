
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-tab-button]");
  
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (btn) {

            let abaAlvo = btn.target.dataset.tabButton;

            let aba = document.querySelector(`[data-tab-id = ${abaAlvo} ]`);
            removeClass()
            aba.classList.add("shows__items--is-active")
            
        })
    }

});


function removeClass() {
    const tabId = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabId.length; i++) {
        tabId[i].classList.remove("shows__items--is-active");
    }
}
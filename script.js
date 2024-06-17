const formShowBtn = document.querySelector("#form_show");
const heroSection = document.querySelector(".hero_section");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".close_btn");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");

formShowBtn.addEventListener("click", () => {
    heroSection.classList.add("show");
});
formCloseBtn.addEventListener("click", () => {
    heroSection.classList.remove("show");
});

signupBtn.addEventListener("click", () => {
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", () => {
    formContainer.classList.remove("active");
});
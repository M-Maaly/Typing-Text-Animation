
const text = document.querySelector(".sec-text");

const textLoad = ()=> {
    setTimeout(() => {
        text.textContent = "Engineer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Developer"
    }, 8000);
} 

textLoad();
setInterval(textLoad, 12000)
const formE1 = document.querySelector(".form")

const inputE1 = document.querySelector(".input")

console.log(inputE1.value);
formE1.addEventListener("submit",()=>{
    event.preventDefault();
    todoList()

});

function todoList(){
    let newTask = inputE1.value;
    const liE1 = document.createElement("li");
    liE1.innerText = newTask;
    uiE1.appendChild(liE1)
    inputE1.value = "";


const checkBtnE1 = document.createElement("div");
checkBtnE1.innerHTML =`<i class="fas fa-check-square">`
    ;
    liE1.appendChild(checkBtnE1);
    const trashBtnE1 = document.createElement("div");
    trashBtenE1.innerHTML =`<i class="fas fa-trash"></i>`;
    liE1.appendChild(trashBtnE1);

    checkBtnE1.addEventListener("click",()=>{
       liE1.classList.toggle("checked");
    });

    trashBtnE1.addEventListener
    ("click",() => {
        liE1.remove();
    });

}
function updateLocalStorage(){
    const liE1 = document.
    querySelectorAll("li")
    let list = []
    liE1s.forEach(liE1=>{

    })
}
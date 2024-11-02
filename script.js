const addtodo = document.querySelector(".row input");
const addBtn = document.querySelector(".row button");
const ul = document.getElementById("list-container");

const inputbox = document.getElementById("input-box");

ul.innerHTML = "";
function addtask(value){
    if(value === ''){
        alert("You must write something");
    }
    else{
        var li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
        console.log("value : ", value);
        value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savedata();
        // console.log(savedata());
        // console.log(ul.innerHTML);
    }
} 

ul.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
}, false); 

function savedata(){
    localStorage.setItem("data", ul.innerHTML);
}

function showtask(){
    ul.innerHTML = localStorage.getItem("data");
}

addtodo.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addtask(addtodo.value);
      addtodo.value = "";
    }
});

addBtn.addEventListener("click", ()=>{
    addtask(addtodo.value);
    addtodo.value = "";
})
showtask();

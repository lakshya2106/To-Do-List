const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value ==='')
        alert("You must write something!");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// here e is an event object , jo ki automatically pass ho jata he jb function pr click hota he 
// aur e.target ye batata he ki container ya jo bhi he usme se kis element pr click hua he.

// classList.toggle "checked" class ko add kr dega agr wo in he to aur he to use hata dega.


listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();

});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();
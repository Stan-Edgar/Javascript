const ulist = document.querySelector("#list");
const input = document.getElementById("item");
const btn = document.querySelector("button");
input.setAttribute("maxlength", 20);





btn.addEventListener("click", function () {

const list = document.createElement("list");
const span = document.createElement("span");
const button = document.createElement("button");
span.style.cssText = "padding: 10px;";
button.style.cssText = "display: flex; width: 70px; font-size: 10px; height: 30px; align-items: center; border-radius: 5px; border: 0; align-items: center; justify-content: center; background-color: black; color: white; font-weight: 800; cursor: pointer;"

button.textContent = "Done";

if (input.value === "") {
    return
}

list.appendChild(span);
list.appendChild(button);

ulist.appendChild(list)

    span.textContent = input.value;
    input.value = "";
  
    
    console.log("Button has been clicked")
    button.addEventListener("click" , function () {
        list.remove();
    })
    
    document.getElementById("item").focus();

  }); 


 

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
       
const list = document.createElement("list");
const span = document.createElement("span");
const button = document.createElement("button");
span.style.cssText = "padding: 10px;";
button.style.cssText = "display: flex; width: 70px; font-size: 10px; height: 30px; align-items: center; border-radius: 5px; border: 0; align-items: center; justify-content: center; background-color: black; color: white; font-weight: 800; cursor: pointer;"

button.textContent = "Done";

if (input.value === "") {
    return
}

list.appendChild(span);
list.appendChild(button);

ulist.appendChild(list)

    span.textContent = input.value;
    input.value = "";
  
    
    console.log("Button has been clicked")
    button.addEventListener("click" , function () {
        list.remove();
    })
    
    document.getElementById("item").focus();
    }
})
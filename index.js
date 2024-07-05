let countValueEl = document.getElementById("countValue");

let getItems = localStorage.getItem("updatedVal");
if(getItems === null){
    countValueEl.textContent = 0
}else{
    countValueEl.textContent = getItems;
}

function clickButton(){
    let previousVal = countValueEl.textContent;
    let updatedValue = parseInt(previousVal)+1;

    localStorage.setItem("updatedVal", updatedValue);
    countValueEl.textContent = updatedValue;
}

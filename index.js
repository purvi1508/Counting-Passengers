//document.getElementById("count").innerText=5
let count= document.getElementById("count-el")
let saveEI= document.getElementById("save-el")

let lapcompleted = 0
function increment(){
    lapcompleted+=1
    count.textContent=lapcompleted
}
function save(){
    let countStr=lapcompleted + "-"
    saveEI.textContent+=countStr
    count.textContent=0
    lapcompleted=0
}


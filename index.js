var list = document.getElementById("list")
var prio = document.getElementById("PrioritySelector")

var tasks = []

function displayList(array){
    list.innerHTML = ``

    array.forEach(function(todo, i){
        list.innerHTML = list.innerHTML + `
        <div class="toDoList">
            <button class="Check"> check ! </button>
            <h4 class="toDoStatus">${todo.status}</h4>
            <p class="toDoTexte">${todo.value}</p>
            <p class="prioritées">${todo.priority}
            <a onClick="edit(${i})"<i class="fas fa-cog"></i>
            <a  onClick="supprimer(${i})" <i class="fas fa-ban"></i></a>
            <div class="modifier"></div> 
        </div>
        `
    })
}

function onTaskSubmit(){
    var prioValue = prio.value
    var inputValue = document.getElementById("input").value
    var todo = { value: inputValue, status: "To do", priority: prioValue }
    tasks.push(todo)
    displayList(tasks)
}

function supprimer(i){

    tasks.splice(i, 1)
    displayList(tasks)
}

function edit(i){

    var modifier = document.getElementsByClassName("modifier")[i]
    console.log("edit html element : ", modifier)
    modifier.innerHTML = modifier.innerHTML + `
    <form >
        <input  value="" id="inputBis"  type="text" placeholder="A faire..."><br>
        <select id ="Selection" class="mt-2" id="">
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
        </select>
        <select id ="PrioritySelectorBis" class="mt-2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
        </select>
        <button onClick="valider(${i})" >valider</button>
    </form>`
}

function valider(i){

    console.log("valider input value : ", document.getElementById("inputBis").value)
    console.log("valider selecte value : ", document.getElementById("Selection").value)
    
    

    if (document.getElementById("inputBis").value !=""){
        tasks[i].value = document.getElementById("inputBis").value
    } 
    if (document.getElementById("Selection").value !=""){
        tasks[i].status = document.getElementById("Selection").value
    }
    if (document.getElementById("PrioritySelectorBis").value != ""){
        tasks[i].priority = document.getElementById("PrioritySelectorBis").value
    }
    
    displayList(tasks)
}

function random(){

    var randomTask = ["faire a manger","ranger la chambre","regarder un film"]
    var random = randomTask[Math.floor(Math.random()*randomTask.length)]
    console.log(random)
    var task = {value: random, status: "to do"}
    tasks.push(task)
    displayList(tasks)
}

function random(){

    var randomTask = ["faire a manger","ranger la chambre","regarder un film"]
    var random = randomTask[Math.floor(Math.random()*randomTask.length)]
    console.log(random)
    var task = {value: random, status: "to do"}
    tasks.push(task)
    displayList(tasks)
}

function filter(status){
    
    var filter = tasks.filter(function(todo){
        return  todo.status === status
    })

console.log(filter)
displayList(filter)
}

// Priorité : 
// Ajout d'une clé priorité : 
// Différentes valeurs de clés : 1,2,3,4,5
// 

function priority(){

    var prio = tasks.sort((a, b) => {
        return  b.priority- a.priority 
    })
    
    displayList(prio)

} 

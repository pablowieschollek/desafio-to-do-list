let tasks = [
    {
        getId:1,
        description:'Hacer ecobotellas',
        completed:false},
    {
        getId:2,
        description:'Estudiar',
        completed:false},
    {
        getId:3,
        description:'Comprar chocolates',
        completed:false}
];

function addSth(){
    const dataTask = document.querySelector('#bar');
    if(dataTask.value === ''){
        alert('Please add a new task')
        return
    }
    
    const assignId = tasks[tasks.length - 1]
    newId = assignId.getId + 1
    let object = {
                   getId:newId,
                   description:dataTask.value,
                   completed:false
                 }
    tasks.push(object)
    assemble()
    showInfo()
    counting()
    dataTask.value = ''
}
function assemble(){
    let insertHtml = ''
    let updateTask = document.getElementById('insertHtml')
    tasks.forEach(function(value){
        insertHtml += `<div class="row">
                        <div class="col">${value.getId}</div>
                        <div class="col">${value.description}</div>
                        <div class="col-sm" onclick="deleteTask(${value.getId})">x</div>
                        <div class="col"><input type="checkbox" id="checkIt${value.getId}" onclick="modifyTask(${value.getId})"></div>
                    </div>` 
    })
    updateTask.innerHTML = insertHtml
}
function showInfo(){
    const showTotal = document.getElementById('total').innerHTML = "Total: "+ tasks.length
    return showTotal
}
function counting(){
    const done = tasks.filter( tasks => tasks.completed == true )
    document.getElementById('realizadas').innerHTML = "Realizadas: "+ done.length
}
function deleteTask(id){    
    const del = tasks.findIndex((ele) => ele.getId == id) 
    tasks.splice(del, 1) 
    assemble()
    showInfo()
    counting()    
}
function modifyTask(id){
    if(document.getElementById('checkIt' + id).checked === true){
        const changeIt = tasks.forEach(newObj => {
            if (newObj.getId === id) {
                newObj.completed = true
            }
            return newObj;
          });
    }else{
        const changeIt = tasks.forEach(newObj => {
            if (newObj.getId === id) {
                newObj.completed = false
            }
            return newObj;
          });

    }
    counting()        
}
assemble()
showInfo()
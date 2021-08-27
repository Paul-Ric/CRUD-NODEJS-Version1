
//Page Inserir

function insertPage(){
    window.location.replace('http://localhost:3000/inserir')
}
function selectPage(){
    window.location.replace('http://localhost:3000/select')
}
function updatePage(){
    window.location.replace('http://localhost:3000/update')
}
function deletePage(){
    window.location.replace('http://localhost:3000/delete')
}

function validarCadastro(){

    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var idade = document.getElementById('idade')
    var sucess = $('#myModal').modal(options)

    if(name.value | email.value | idade.value === ''){
        alert('Campos obrigatorios não preenchido')
    }else{
        sucess
    }
    return sucess
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.mbd.modal',()=>{
    myInput.focus()
})

const mySQL = require('mysql')
const sql = mySQL.createConnection ({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306'
})

sql.query('use nodejs')

function dele(){
    sql.query('delete * from user where=id?',()=>{
        alert('DEU CERTO')
    })
}




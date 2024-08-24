let nomes = []

let nome = document.getElementById('nome') 
let cell = document.getElementById('cell') 
let email = document.getElementById('email') 



let id_tmp = document.getElementById('id_tmp');
let btn_cadastrar = document.getElementById('btn_cadastrar');
btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault();


    if (nome.value == "") {
        let msg = document.getElementById('mensagens');
        msg.classList.remove('d-none');
        setTimeout(() => {
            msg.classList.add('d-none');
        }, 3000);
    } else {
        if (id_tmp.value == "") {
            nomes.push([nome.value,cell.value,email.value])
        } else {
            if (id_tmp.value == "") {
                nomes.push(nome.value)
            } else {
                nomes[id_tmp.value][0] = nome.value
                nomes[id_tmp.value][1] = cell.value
                nomes[id_tmp.value][2] = email.value
            }
        }
    
        atualizar_listar();
        nome.value = ""
        cell.value = ""
        email.value = ""
    }
})

function atualizar_listar() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
    nomes.forEach((nm, index) => {
        lista.innerHTML += `<tr> 
        <td>${nm[0]}</td> 
        <td>${nm[1]}</td> 
        <td>${nm[2]}</td> 
        <td>
        <button class="btn btn-warning"><i class="bi bi-pencil-square" onclick="editar(${index})"></i></button>
        <button class="btn btn-danger"><i class="bi bi-trash3" onclick="apagar(${index})"></i></i/button>

            </td> 
        <tr>`
    });
    id_tmp.value = ""
}

function editar(indice) {
    console.log("estamos editando o indice: " + indice)

    nome.value = nomes[indice][0]
    cell.value = nomes[indice][1]
    email.value = nomes[indice][2]

    btn_cadastrar.classList.remove('btn-primary')
    btn_cadastrar.classList.add('btn-info')

    id_tmp.value = indice;
}

function apagar(indice){
    let confirmacao = confirm('Deseja realmente excluir o item ' + nomes[indice] + " ?")

    if(confirmacao){
        //apagar
        nomes.splice(indice,1);
        atualizar_listar();
    }else{
        //cancelar a exclusão
        alert("Exclusão cancelada")
    }
}
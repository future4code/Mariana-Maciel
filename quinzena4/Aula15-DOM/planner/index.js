function tarefaNova(){
    let adicionarTarefa = document.getElementById("tarefa").value
    let diaDaSemanaSeletor = document.getElementById("dias-semana").value
    
    document.getElementById(diaDaSemanaSeletor).innerHTML += "<p> " + adicionarTarefa + "</p>"
    document.getElementById("tarefa").value = ""

}
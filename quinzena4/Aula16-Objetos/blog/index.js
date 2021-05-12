let arrayDePost = []

function criarNovoPost() {
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")

    const postNovo = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value
    }


    arrayDePost.push(postNovo)
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
    console.log(arrayDePost)
    mostrarPost()
}

function mostrarPost() {
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for (let item of arrayDePost){
        container.innerHTML += novopost(item)
    }
}

function novoPost(itensDoPost) {
    return "<div>" + "<h3>" + itensDoPost.titulo + "</h3>" + 
        "<p>" + itensDoPost.autor + "</p>" + 
        "<p>" + itensDoPost.conteudo + "</p>" + 
        "</div>"
}
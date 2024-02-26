function toggleMode() {
    const html = document.documentElement

        /*Logica de funcionamento*/
    /*if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")

    } */

    /* Porem posso deixar isso mais simplificado usando isso-->*/
    
    html.classList.toggle("light")

    // pegar a tag img e substituir a img

    // mas se tiver em light mode, adicionar a img light
    // se tiver sem light mode, manter a img root

    const img = document.querySelector(".profile img")

    if (html.classList.contains("light")) {
        
        img.setAttribute("src", "./assets/avatar-light.png")

    } else {
        img.setAttribute("src", "./assets/avatar-root.png")


    }


}
function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.Contain("light")){
        img.setAttribute()
    }else {
        img.setAttribute("src","avatar-dark.png")
        
    }
    

}
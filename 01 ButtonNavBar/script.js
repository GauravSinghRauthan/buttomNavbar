const mainBackImg = document.getElementById("imgContainer")
const mainBtn = document.getElementById("mainBtn")

const liValue = ["Home","About-us","Contact","Login"]

mainBtn.addEventListener("click",()=>{
    mainBtn.style.display = "none";
    const ul = document.createElement("ul")
    
    mainBackImg.appendChild(ul)
    liValue.map((e)=>{
        const li = document.createElement("li")
        const liVal =ul.appendChild(li)
        const textnode = document.createTextNode(e)
        liVal.appendChild(textnode)  
    })
})

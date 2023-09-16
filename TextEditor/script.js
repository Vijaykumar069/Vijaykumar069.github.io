let optionsButton = document.querySelectorAll(".option-button")
let advOptionsButton = document.querySelectorAll(".adv-option-button")
let fontName = document.getElementById("fontName")
let fontSize = document.getElementById("fontSize")
let writing = document.getElementById("text-input")
let linkButton = document.getElementById("createLink")

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive"
]

let array = Array.from(optionsButton)

console.log(array)

const initializer = () => {
    fontList.map(value => {
        let option = document.createElement("option")
        option.value=value
        option.innerHTML=value
        fontName.appendChild(option)
    })

    for(let i=1;i<=7;i++){
        let option = document.createElement("option")
        option.value=i
        option.innerHTML=i
        fontSize.appendChild(option)
    }

    fontSize.value=3
}

let toggleColor

array.slice(0,6).forEach((e)=>{
    e.addEventListener('click',()=>{
        if(toggleColor===true){
            e.style.backgroundColor="white"
            toggleColor=false
            modifyText(e.id,true,null)
        }
        else{
            e.style.backgroundColor="#dddddd"
            toggleColor=true
            modifyText(e.id,false,null)
        }
    })
})

const modifyText = (command,defaultUI,value)=>{
    document.execCommand(command,defaultUI,value)
}

array.slice(6,18).forEach((e)=>{
    e.addEventListener('click',()=>{
        if(toggleColor===true){
            modifyText(e.id,true,null)
        }
        else{
            modifyText(e.id,false,null)
        }
    })
})

advOptionsButton.forEach((e)=>{
    e.addEventListener('change',()=>{
        modifyText(e.id,false,e.value)
    })
})

linkButton.addEventListener('click',()=>{
    let userLink = prompt("Enter a link")

    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink)
    }else{
        userLink="http://"+userLink
        modifyText(linkButton.id,false,userLink)
    }
})

window.onload= initializer()
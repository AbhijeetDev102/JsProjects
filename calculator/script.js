
let cal=[]

document.querySelector(".divide").addEventListener("click", ()=>{
    cal.push("/")
    document.querySelector(".container input").value=cal.join("")
})
document.querySelector(".multiply").addEventListener("click", ()=>{
    cal.push("*")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".one").addEventListener("click", ()=>{
    cal.push("1")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".two").addEventListener("click", ()=>{
    cal.push("2")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".three").addEventListener("click", ()=>{
    cal.push("3")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".subtract").addEventListener("click", ()=>{
    cal.push("-")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".four").addEventListener("click", ()=>{
    cal.push("4")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".five").addEventListener("click", ()=>{
    cal.push("5")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".six").addEventListener("click", ()=>{
    cal.push("6")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".add").addEventListener("click", ()=>{
    cal.push("+")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".seven").addEventListener("click", ()=>{
    cal.push("7")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".eight").addEventListener("click", ()=>{
    cal.push("8")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".nine").addEventListener("click", ()=>{
    cal.push("9")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".point").addEventListener("click", ()=>{
    cal.push(".")
    document.querySelector(".container input").value=cal.join("")

})
document.querySelector(".zero").addEventListener("click", ()=>{
    cal.push("0")
    document.querySelector(".container input").value=cal.join("")

})

document.querySelector(".equals").addEventListener("click", ()=>{
    let result=eval(cal.join(""))
    var newvalue=result+""
    cal=[newvalue]
    document.querySelector(".container input").value=result
})


document.querySelector(".delete").addEventListener("click", ()=>{
    cal.pop()
    document.querySelector(".container input").value=cal.join("")
})
document.querySelector(".AC").addEventListener("click", ()=>{
    cal=[]
    document.querySelector(".container input").value=cal.join("")
})
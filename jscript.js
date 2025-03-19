document.getElementById("heron").addEventListener("submit", function(event){
    event.preventDefault()
    const a = parseInt(document.getElementById("a").value)
    const b = parseInt(document.getElementById("b").value)
    const c = parseInt(document.getElementById("c").value)

    const area = Math.sqrt((4*a*a*b*b)-Math.pow(a*a+b*b-c*c,2))/4
    document.getElementById("resultHeron").innerHTML = "Area of the triangle is: "+area
})
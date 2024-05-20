var allproducts =document.querySelectorAll(".products div")
var div =document.querySelector("#div1")
var btn =document.querySelector("#btn1")
var totalprice =0






allproducts.forEach(function (item) {
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        div.innerHTML += item.getAttribute("title")+" / "
        console.log(item.textContent)
        if (div.innerHTML != "" ){
            
            btn.style.display = "block"
            btn.style.backgroundColor = "blue"
            btn.style.color = "white"
            btn.style.width = "200px"
            btn.style.height = "50px"
            }
        }
})
document.getElementById("btn1").onclick = function(){
    document.getElementById("div3").innerHTML=totalprice
}
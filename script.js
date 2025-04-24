var imgbox=document.getElementById("imgbox")
var qrimg=document.getElementById("qrimg")
var qrtxt=document.getElementById("qrtxt")
var btn=document.getElementById("btn")

    if(qrtxt.value.length>0)
    {
       qrtxt.addEventListener("keydown",function(event){
        if(event.key ==="Enter")
        {
            btn.click()
            event.preventDefault()
            qrimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtxt.value
            imgbox.classList.add("show-img")
        }
       }) 
    
    }
    else{
        qrtxt.classList.add("error")
        setTimeout(()=>{
            qrtxt.classList.remove("error")
        },1000)
    }

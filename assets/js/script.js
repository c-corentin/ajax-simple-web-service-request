(()=>{
    window.addEventListener("load", async () => {
        try {
            const REQUEST = await fetch("https://thatsthespir.it/api")
            const RECEIVED = await REQUEST.json()
            console.log(RECEIVED)
            const AUTHOR = await RECEIVED.author
            const QUOTE = await `"${RECEIVED.quote}"`
            const PIC = await RECEIVED.photo
            
            document.getElementById("author").innerHTML = AUTHOR
            document.getElementById("quote").innerHTML = QUOTE

            PIC == "" ? document.getElementById("pic").remove() : document.getElementById("pic").src = PIC
        }
        
        catch (error){
            console.error(error) 
        }
    })

})()
const getImage =async () =>{
    let display = document.getElementById("display")
    try{
        const res=await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        display.src=data.message

    }
    catch(err)
    {
        console.log(err.mane);
    }
}
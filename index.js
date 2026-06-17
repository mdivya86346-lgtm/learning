
let colorCodes=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd','e','f']
const changeColor = () => {
    let display = document.getElementById("display")
    let randcolor = "#"
    let color = document.getElementById("color")
    for(let index =0;index <6; index++)
    {
        let randNo=Math.floor(Math.random()*16)
        randcolor += colorCodes[randNo]
    }
    color.innerHtml = randcolor
    display.style.backgroundColor=randcolor
}
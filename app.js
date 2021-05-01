const svgs = document.querySelectorAll('.svg')

for(let svg of svgs){
    svg.addEventListener('click',rotateSVG)
}
 

function rotateSVG (e) {
e.target.classList.toggle("rotate")
}
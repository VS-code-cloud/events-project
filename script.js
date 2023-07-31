var box = document.getElementById("color-display")
for (let i=0; i<document.getElementsByTagName("button").length; i++) {
    let el = document.getElementsByTagName("button")[i];
    el.addEventListener("click", function() {changeColor(el.id)}); 
}
function changeColor(color) {
    box.innerHTML = color;
    console.log('clicked', color, box)
    if (color!=="colorless") {
        box.style.backgroundColor = color;
    } else {
        box.style.backgroundColor = "#FFFFFF";
    }
}
const container = document.querySelector('.container')

for(let i = 0; i < 100; i++){
    const box = document.createElement("div");
    box.style.color = 'blue'
    box.classList.add('box')
    const colorcode = getRandomColor()
    box.style.backgroundColor = colorcode;
    box.innerText = colorcode;
    container.appendChild(box);
}

function getRandomColor(){
    const hex = '0123456789abcdef';
    let color = '#';
    for(let c = 0; c < 6; c++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log('Shania Claire');


function createPixels(size = 16) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    let randomColor = generateRandomColorValue();
    for (let i = 0; i < size; i++)
    {
        let row = document.createElement('div');
        row.setAttribute('class', 'row')
        for (let j = 0; j < size; j++)
        {
            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            row.appendChild(pixel);

            pixel.addEventListener('mouseenter', () => {
                // pixel.style.backgroundColor = convertToRGBValue(randomColor);
                // randomColor = darkenTheColor(randomColor);

                pixel.style.backgroundColor = getColor();
            });
        }
        container.appendChild(row);
    }
}   

function createButton() {
    let button = document.createElement('button');
    let body = document.querySelector('body');
    let topUI = document.querySelector('.top-UI');
    button.textContent = 'Size';
    button.setAttribute('style', '--c:#E95A49')
    // body.insertBefore(button, body.firstChild);
    topUI.appendChild(button);
    return button;
}

function getColor() {
    let color = document.querySelector('#colorPicker');
    return color.value;
}   

function createSizeDescription(size = 16) {
    let sizeDescription = document.createElement('div');
    sizeDescription.setAttribute('class', 'description');
    sizeDescription.textContent = `${size} X ${size}`;
    document.body.appendChild(sizeDescription);
}

function updateSizeDescription(size) {
    let sizeDescription = document.querySelector('.description')
    sizeDescription.textContent = `${size} X ${size}`;
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // console.log(`rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColorValue() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return {r, g, b};
}

function darkenTheColor(color) {
    let multiplier = 0.97
    let r = +color['r'] * multiplier < 0 ? 0 : +color['r'] * multiplier;
    let g = +color['g'] * multiplier < 0 ? 0 : +color['g'] * multiplier;
    let b = +color['b'] * multiplier < 0 ? 0 : +color['b'] * multiplier; 
    return {r, g, b};
}

function convertToRGBValue(color) {
    return `rgb(${color['r']}, ${color['g']}, ${color['b']})`;
}

function main() {
    let size;
    createPixels();
    createButton().addEventListener('click', () => {
        size = prompt("Enter size");
        if (size > 100)
        {
            return alert ('Max size is 100');
        }
        if (size === null || isNaN(size))
        {
            return alert('Enter a valid number');
        }
        createPixels(parseInt(size));
        updateSizeDescription(size);
    });
    createSizeDescription();
}

main();
getColor();
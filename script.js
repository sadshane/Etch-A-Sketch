console.log('Shania Claire');
let randomToggle = false;
let darkenToggle = false;
let mainColor;

function createPixels(size = 16) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    for (let i = 0; i < size; i++)
    {
        let row = document.createElement('div');
        row.setAttribute('class', 'row')
        for (let j = 0; j < size; j++)
        {
            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            row.appendChild(pixel);
            
            let bool = true;
            pixel.addEventListener('mouseenter', () => {
                if(randomToggle === true)
                {
                    bool = true;
                    pixel.style.backgroundColor = generateRandomColor();
                }
                if(darkenToggle === true)
                {
                    let color = document.querySelector('#colorPicker');
                    color.addEventListener('input', () => {
                        mainColor = hexToRgb(color.value);
                    });
                    pixel.style.backgroundColor = convertToRGBValue(mainColor);
                    mainColor = darkenTheColor(mainColor);
                }
                if(!randomToggle && !darkenToggle)
                {
                    pixel.style.backgroundColor = getColor();
                }
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
    let color = document.querySelector('#colorPicker').value;
    mainColor = hexToRgb(color);
    return color;
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

function hexToRgb(hex) {
    // Remove the # symbol if it exists
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
    }
  
    // Convert the hex value to RGB components
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Return the RGB value as a string
    return {r, g, b};
  }
  

function navigationButton(size) {
    let random = document.querySelector('.random');
    let darken = document.querySelector('.darken');
    let reset = document.querySelector('.reset');
    let normal = document.querySelector('.normal');

    random.addEventListener('click', () => {
        randomToggle = true;
        darkenToggle = false;
    });

    darken.addEventListener('click', () => {
        randomToggle = false;
        darkenToggle = true; 
        let color = document.querySelector('#colorPicker').value;
        mainColor = hexToRgb(color);
    });

    normal.addEventListener('click', () => {
        randomToggle = false;
        darkenToggle = false; 
    });

    reset.addEventListener('click', () => {
        createPixels(size);
    });
}

function main() {
    let size;
    getColor();
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
        navigationButton(size);
    });
    navigationButton(size);
    createSizeDescription();
}

main();
console.log('Shania Claire');


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

            pixel.addEventListener('mouseenter', () => {
                pixel.style.backgroundColor = '#FFE17B';
            });
        }
        container.appendChild(row);
    }
    
}

function createButton() {
    let button = document.createElement('button');
    let body = document.querySelector('body');
    button.textContent = 'Size';
    button.setAttribute('style', '--c:#E95A49')
    body.insertBefore(button, body.firstChild);
    return button;
}

function main() {
    createPixels();
    createButton().addEventListener('click', () => {
        let size = prompt("Enter size");
        if (size === null || isNaN(size))
        {
            return alert('Enter a valid number');
        }
        createPixels(parseInt(size));
    });
}

main();
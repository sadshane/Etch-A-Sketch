console.log('Shania Claire');


function createPixels(size) {
    let container = document.querySelector('.container');
    for (let i = 0; i < size; i++)
    {
        let row = document.createElement('div');
        row.setAttribute('style', 'display: flex;')
        for (let j = 0; j < size; j++)
        {
            let pixel = document.createElement('div');
            let styles = 'height: 50px; width: 50px; background-color: #CECE5A;';
            pixel.setAttribute('style', styles);
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
    button.addEventListener('click', () => {
        prompt("Enter grid size");
    });
}

function main() {
    createButton();
    createPixels(16);
}

main();
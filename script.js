console.log('Shania Claire');


function createPixels(size) {
    let container = document.querySelector('.container');
    for (let i = 0; i < size; i++)
    {
        let row = document.createElement('div');
        row.setAttribute('style', 'margin: 4px 0px; display: flex; gap: 4px;')
        for (let j = 0; j < size; j++)
        {
            let pixel = document.createElement('div');
            let styles = 'height: 50px; width: 50px; background-color: blue;';
            pixel.setAttribute('style', styles);
            row.appendChild(pixel);

            pixel.addEventListener('mouseenter', () => {
                pixel.style.backgroundColor = 'red';
            });
        }
        container.appendChild(row);
    }
    
}

function main() {
    createPixels(16);
}

main();
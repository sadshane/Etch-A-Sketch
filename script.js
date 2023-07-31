console.log('Shania Claire');


function createPixels() {
    let container = document.querySelector('.container');
    for (let i = 0; i < 16; i++)
    {
        let pixel = document.createElement('div');
        let styles = 'height: 100px; width: 100px; background-color: blue;';
        pixel.setAttribute('style', styles);
        container.appendChild(pixel);
    }
}
function main() {
    createPixels();
}

main();
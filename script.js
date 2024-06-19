console.log('Start');

let imageHTML = document.querySelector('#image');
let image;

window.onload = function() {
    getRandomImage().then(imageSrc => {
        imageHTML.src = `./src/images/${imageSrc.split('.')[0]}.png`; // Correctly extract filename without timestamp
    });
}

function getRandomImage() {
    return fetch('./src/images') // Replace if necessary
    .then(response => response.text())
    .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            const fileLinks = links.filter(link => link.href.endsWith('.png')); // Adjust the filter based on the file types you're interested in
            const filenames = fileLinks.map(link => link.textContent.trim().split('.')[0]); // Extract filename part before extension
            const randomIndex = Math.floor(Math.random() * filenames.length);
            return filenames[randomIndex];
        })
    .catch(error => {
            console.error('Error fetching directory:', error);
            throw error; // Rethrow error so it can be caught outside
        });
}

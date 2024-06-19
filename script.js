window.onload = function() {
    getRandomImage();
}



function getRandomImage() {
    fetch('C:\\Users\\isaac\\Downloads\\wypher') // Replate if neccisarry
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            const fileLinks = links.filter(link => link.href.endsWith('.txt')); // Adjust the filter based on the file types you're interested in
            const filenames = fileLinks.map(link => link.textContent);
            return filenames
    })
    .catch(error => console.error('Error fetching directory:', error));

    const images = filenames
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
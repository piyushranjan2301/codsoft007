const nav = document.querySelector('.fixed-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        nav.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        nav.style.backgroundColor = '#333'; // Revert to initial background color
    }
});
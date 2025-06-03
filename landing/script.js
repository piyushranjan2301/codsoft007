document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    // Function to change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // When scrolled down 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Function to change style on hover for navigation items
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            // This is handled by CSS :hover pseudo-class,
            // but you could add more complex JS hover effects here if needed.
            // For example, if you wanted to change other elements based on hover.
            // For this example, CSS handles the direct hover styling.
        });

        link.addEventListener('mouseout', function() {
            // Reset styles on mouse out, again, largely handled by CSS.
        });
    });
});
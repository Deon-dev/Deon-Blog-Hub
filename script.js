// Function to open a modal
function openModal(modalId) {
    // Close any currently open modals
    const openModals = document.querySelectorAll('.modal');
    openModals.forEach(modal => {
        modal.style.display = 'none';
    });

    // Open the specified modal
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
    }
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
};

// Get the button
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button when scrolling
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Show the button
    } else {
        backToTopButton.style.display = 'none'; // Hide the button
    }
};

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Function to toggle the menu
function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.style.display = menuContainer.style.display === 'block' ? 'none' : 'block';
}

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const menuContainer = document.getElementById('menu-container');
    const burgerIcon = document.querySelector('.burger-icon');

    // Check if the click is outside the menu and burger icon
    if (
        menuContainer.style.display === 'block' && // Menu is open
        event.target !== menuContainer && // Click is not on the menu container
        event.target !== burgerIcon && // Click is not on the burger icon
        !menuContainer.contains(event.target) // Click is not inside the menu container
    ) {
        menuContainer.style.display = 'none'; // Hide the menu
    }
});

// const swiper = new Swiper('.mySwiper', {
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         480: {
//             slidesPerView: 1, // Show 1 slide on mobile
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 2, // Show 2 slides on tablets
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 3, // Show 3 slides on desktops
//             spaceBetween: 30,
//         },
//     },
// });
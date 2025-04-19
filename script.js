// Function to handle blog search
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase(); // Get the search input value and convert to lowercase
    const blogPosts = document.querySelectorAll('.swiper-slide'); // Select all blog post containers

    blogPosts.forEach(post => {
        const title = post.querySelector('.recent-text h1').textContent.toLowerCase(); // Get the blog title
        const content = post.querySelector('.recent-text p').textContent.toLowerCase(); // Get the blog content

        if (title.includes(query) || content.includes(query)) {
            post.style.display = 'block'; // Show the blog post if it matches the query
        } else {
            post.style.display = 'none'; // Hide the blog post if it doesn't match
        }
    });
});

// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
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
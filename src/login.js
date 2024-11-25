
// Basic form validation for login page
document.getElementById('loginForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        e.preventDefault();
        alert('Please fill out all fields before logging in.');
    }
});

// JavaScript to handle modal visibility
function toggleModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Close the modal when clicked outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

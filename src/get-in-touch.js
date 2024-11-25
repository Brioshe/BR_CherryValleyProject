document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('signupModal');
    const closeModal = document.querySelector('.close');
    const signupButton = document.getElementById('signupButton');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzwOl6Z0bBQO_nrvlbuU6whkTGTnJgCe91iAjqttOHhV2d9SrxvtkNSSCiUFtzkI9uyNQ/exec';
    const form = document.forms['contactForm'];

    // Show modal after 2 seconds, only if not already shown
    if (!sessionStorage.getItem('modalShown')) {
        setTimeout(() => {
            modal.style.display = 'block';
            sessionStorage.setItem('modalShown', 'true');
        }, 2000);
    }

    // Close modal on 'X' button click
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Show modal on signup button click
    signupButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // Fetch response from Google Apps Script
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form),
            });

            // Check for successful response
            if (response.ok) {
                const result = await response.json();

                if (result.result === 'success') {
                    alert('Thank you! Your form was submitted successfully.');
                    modal.style.display = 'none'; // Close the modal
                    form.reset(); // Reset the form
                } else {
                    throw new Error(result.error || 'Unexpected response from server.');
                }
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        } catch (error) {
            // Handle errors gracefully
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    });
});

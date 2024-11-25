
// Image modal functionality for gallery
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

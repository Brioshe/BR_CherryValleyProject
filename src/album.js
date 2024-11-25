// Define the Google Photos album link (make sure the link is properly encoded)
const albumLink = encodeURIComponent("https://photos.app.goo.gl/1Mmu5Ktwijooe2cF6");

// Fetch public image links using PublicAlbum.org
async function fetchImages() {
    try {
        const response = await fetch(`https://publicalbum.org/api/extract?url=${albumLink}`, {
            method: 'GET',
            headers: {
                'Origin': 'http://172.0.0.1', // or 'http://127.0.0.1' if you're testing locally
                'X-Requested-With': 'XMLHttpRequest' // Standard header for Ajax requests
            }
        });
        
        const text = await response.text(); // Read response as text
        console.log("Response Text:", text); // Log raw text

        const data = JSON.parse(text); // Try to parse it as JSON
        return data.photos.map(photo => photo.url); // Returns an array of image URLs
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}


// Populate the gallery dynamically
async function populateAlbum() {
    const gallery = document.getElementById("album-gallery");
    
    // Fetch image URLs from the Google Photos album
    const imageUrls = await fetchImages();
    
    if (imageUrls && imageUrls.length > 0) {
        imageUrls.forEach(url => {
            const imgElement = document.createElement("img");
            imgElement.src = url;
            imgElement.alt = "Gallery Image";
            imgElement.classList.add("gallery-img");
            gallery.appendChild(imgElement);
        });
    } else {
        gallery.innerHTML = "No images available.";
    }
}

// Call the function to populate the gallery
populateAlbum();

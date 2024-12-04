// Define images for albums
const albums = {
    wildlife: [
        'https://lh3.googleusercontent.com/pw/AP1GczM95MaiWdZIshmfR4IQTHDcPFF-L0feUtlHzPKJxYlD7WQSbj1jxSA58ocxSnxVrM2V7QVx-fLeLQH6SKJ4v39NobH-GjBJtKfebmfnQ8gAB5792fr-5kJ3MQBU_iK7BUDYMLglCWZyGBx-zRwoNMXJwA=w494-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczM7yur8BO78kkkdS6BsE-Dp9ohtKv04kfINYMgmbQT8cktOMohjuDt2u35dMs8DrZO51ms6hCy6AcD55zsrlSaR-mGw_Sv2BbYEeZ5nU5Nq1YJnPiHUyvSMWwUA7abU23akSZvMyrXzCh-ealH5jCn7Cw=w1170-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMPGufI31an8xMXlz--qu9QGClpFjktjy_i9UcF9laMKESeEbYFmfsoU4HXL6ChYFseGUHs2rIooLfLQwk-25vKLtQq9irvFc1H_iE9q2B83_rbMlLt7M_RPTK8jZCpM6VacosMAHarCoVZR0t2kzwiFQ=w1170-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNjNwqoHXkUm83ZQggRQ0bli35hPBzNGTZcekYivQMlIZMQcUYS_1aldasj3HyZng6PU4KiP7bzOtl4y8c0YisjzwdDvYbsZf6kCGsTQejyDyp3TC_BdG9yRJ3Gl8AAOaeh7mErJV4Oo0iMnkh0FahcCg=w1170-h878-s-no-gm?authuser=0'
        ],
    nature: [
        'https://lh3.googleusercontent.com/pw/AP1GczNXcvMSzk2xrEr1hXiT3-aYdSvgS6lKo_d5xwAuDB-VBlmZwpB5_ahT0ZD7-p9h7CU5cDnFvQrB3lo1WGfk5nJIIn-0z7gIcRNgJcpKPDEoUleQsQ5zClf7M0aPK0qUr_G8LBInV_Lsqm7Upa5RamCqFA=w1565-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOgruBMc4LfiUeieZrm1Qi4PdcSs2eJ9o1oDEqm6HE0HD8fZTyXvrpyN8je4WsvWc1lyJ_cSKQRpaLCtkx-8GUBlLAr5xBqIoa18bku5bclkTZMLE9e3zo651A5x9zj4ca0ZNlvbfBmcrhVgXYsdSM2Aw=w659-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMw1-NNCOlXv_ATpQzVuWxXMxuDoMOpzdXI4av31GEfRr6MQ5u-a5hUiQ8sdDweAhwSEwjB3tB_KvlxtZwABya0s_pSGFglpm_KJyNEbfZ7a-SKDkKNzlWG1ZNchMMugu3Y4Kjas2faY3EmomRFARot9w=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOMEQ0XfYOywlgP-1GhNnPMAgGYpS8mNqUvXKd4uDrXeq4I80bX9ALVPc8OOynzQd48NzA9xdyATBSLetmUSm0FuhIM7bsRK0XSujO51fxeY3RaDFKv-bDZ2Fs89OXm5qi6Mld4eMi9_1uhuhdZA2k0Sw=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNVQPkm8twyHf1J8Yy8l29yTcGa7t1ab7kXzQzx07YNWLOLDdSQETzd8slatpac88moalfq03MLOEamKqflg_4by-BJ_vL_S1hAkzRZsYUtNdk_Iu2jgrl_s2UUeqQwzgoXo1EhKxnBFKHd1CUpUeneng=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNMb1pKgCd53o-EV35eoriTIEhBM3UXWdmcr4XwiKa_pnZB3iE95xjNi0dvIjSoDAQqZUvFS0liUmcwBeNDUfPDWvRaSVwVj4uhzTx56He17LX9Oim_RxDa1nCwZLp1LTm5SeVfV5lR6XERr6ZM7FSjuw=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOFO_fwULoV_46oG2Njn_Fvb3VGGl3JMOXljdE1521bq5f5kiAVWBjJmNHOYfGfgzkL_J2bJsq5JxkjptsyjI9NuCqGbOoAPreTcxdywGuTj_jtPd-MgFDDeuWRIlcTrOZaKDcpRgR-lyrqlos6in_4SA=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMwb2QW_Z8puXEIHO7h7B6dPRhXVSJEWsJ7JvmsNdLDm5dQOhZxT87R58nqGM55hfjHE1BqmALOEmid9qJv9h25LfzvK1UorZc3YENJBF24BBuajUGsygK298bOUkmR6SXhDfkgTqyxjp1J-5V4XVvtfA=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMDR0Kb7SAJRMSXJN-FSitC2i-7tFEJ0yZlHI7W0L3gJTlWvIL_VaSBYQV0zw_LF5bBDzRsBJCSniu0BKIbsl6lOb4P9YSMBvUfHRsziNrsOKEw_OVaBS592E-Uhr3EmWr7WooYScp3U0fE-PaEpoZZwg=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMQWhK14uUfW19OmVLz3QSWGunYg9XlN7YmrHChua2gsAC-jZWaksLcpz4mYPmtk4RMV1Fxc_32KxmQwvrCt2KF5BWjYdHwsKc_LC8U62GubaWHmQpOBNqgYYdjZyTcsGV9v9_UiyDDyWI0_B6-KXTCuQ=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMgEYnGq82GUNRAZ_M1mI-ICvZhODcvVrAjf5ZNAHM8e3l871lvJfCqq8yJoTU9FmbpYrvM_IdlrDnE5aMB-5tJslGuH81xieV8ybWL7J99Z1VO2MksmbI38VSWiK-HC9v4walD4aNvF_M6erjef-x9Cw=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczP8IROjAZzu_6ASZNLxLLIXc0YT3XQgws0HxF_t--3HSeWj6iQz9wG9JdNUto0GVuBdECb92AXirfA1HhlhIy6haemvoJxeUeMneW0eCRShaZfc4tegLq8hiE73znQyBIKT4K-27j2ryjm7-DdzFO5fxw=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOyw9TFL1soW6aDWvqQIi-W-DWWln9M_n3CAZalEc9GlWgEDk8txUHrtvr4679J6ivF5gwvsJWKhuiqPKTVhIB4BgGcmHyI6XDh3TktxKCCiwaVJAkjsrmk0SksnO92ybx3x44icYUsMDSNLu13Tv3oVA=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczP3D06BmzAsVmGKvJwqynATme0O3wIAc5TZ9kYk5PRIydu1IF_LkycKngAwPnxknCyuQHdqBzhoxh9mTJA_qqMgYDkXaaL088lPvN5xS-JoRs0UGt5W5FLcaOQJNOP2dmQAXKOt0gINP2E1XtaXQmI0cQ=w1560-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNvC4NjBIAzlTYL9QdujKH7uSjXrK2bLrXtOf7kchHl-hwf3nPSRQPh9rLXBZzMoJ1MzF4eS9l7MUaZvezyniaO1VIfuBvFzZmIYE1c5HkVETCFFBtyFxAjBODIkQR0WQ7Telz5-72OB5y3A1HWlhjWWA=w1560-h878-s-no-gm?authuser=0'
        ],
    events: [
        'https://lh3.googleusercontent.com/pw/AP1GczPKaEs0413dOTuFBK3BtUNCTDkvBR16bHQWTHDjhtX1lanQt0GqLIaO0QFE-Nn_84PV-C-D5la0KBDR7wi78I4gVP2XlBTA0uqPPOg7F5hkCCzneuHn47i0M34JbxjLdZO5YhquaVCKiaIGaFYxfXlDmw=w1170-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNhPXVGsr07MqzvcGcReMNd0Ice5PmqK0yuXzy2Q5ufwgEtkHOL_Y5tNqcDAYyJSfhi0ESLLBOVSFCeHQjm1pctQ4hPFeb6W9KIj-BJqfSHKtKTJ2IEOLdeRlOMCWekIZQgc7NOUFzlwSs8FzWX-aM4NQ=w1170-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNeBWbsZtiD4VkYvA08G9jO_D0USLUpsWqXDiVP4x_SONuq8crI9MV-FjF0yev3FJp2j1BRoDOn8X2oM_8qd-_Ik2gNFdn2sxAjbo-RnDMDIwN3mb4Bn896gI9QBGlNEJI5YMC45wFejpoJdl44_F-d6Q=w1170-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczN-u94bcLMQravBm-6dyrTn6fd52vn_i_qvolnO0ibnvzO1kWTb3cPF7B2zxPNJVUwAwib1K8jf8Xb3kAr0Qmi0DTTVTU7qbc7AmTaSlbr9qtDAY3BjAyTQuN0rhSQfUR7kJVVggv-GSYLj--uq5MeVYg=w1170-h878-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPRQMNj8EAD7p9QIJ8I4jq6YqwqFFd46rHB95l59cz48MCs6Sei1rOLs5O3vVmVuPI-BN_DDJEKSiZyayWkRxxRKMn753Tw2PdXdR9nGip2vjvea25_XE3sVFDVUB3hHEw2qvqqM1CXaK2xLk-UXT9M9Q=w627-h878-s-no-gm?authuser=0'
    ]
};

// Load content for gallery and album views
function loadContent() {
    loadGallery();
}

// Gallery view setup
function loadGallery() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Gallery</h1>
        <div class="gallery">
            <div class="album" data-album="wildlife">
                <p>Wildlife</p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczMPGufI31an8xMXlz--qu9QGClpFjktjy_i9UcF9laMKESeEbYFmfsoU4HXL6ChYFseGUHs2rIooLfLQwk-25vKLtQq9irvFc1H_iE9q2B83_rbMlLt7M_RPTK8jZCpM6VacosMAHarCoVZR0t2kzwiFQ=w1103-h827-s-no-gm?authuser=0" alt="Album 1" class="album-img">
            </div>
            <div class="album" data-album="nature">
                <p>Nature</p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczMQWhK14uUfW19OmVLz3QSWGunYg9XlN7YmrHChua2gsAC-jZWaksLcpz4mYPmtk4RMV1Fxc_32KxmQwvrCt2KF5BWjYdHwsKc_LC8U62GubaWHmQpOBNqgYYdjZyTcsGV9v9_UiyDDyWI0_B6-KXTCuQ=w1470-h827-s-no-gm?authuser=0" alt="Album 2" class="album-img">
            </div>
            <div class="album" data-album="events">
                <p>Events</p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczNeBWbsZtiD4VkYvA08G9jO_D0USLUpsWqXDiVP4x_SONuq8crI9MV-FjF0yev3FJp2j1BRoDOn8X2oM_8qd-_Ik2gNFdn2sxAjbo-RnDMDIwN3mb4Bn896gI9QBGlNEJI5YMC45wFejpoJdl44_F-d6Q=w1103-h827-s-no-gm?authuser=0" alt="Album 3" class="album-img">
            </div>
        </div>
    `;
    // Add event listener to album links
    document.querySelectorAll('.album').forEach(album => {
        album.addEventListener('click', () => {
            const albumName = album.getAttribute('data-album');
            loadAlbum(albumName);
        });
    });
}

// Load album view with images
function loadAlbum(album) {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>${album.charAt(0).toUpperCase() + album.slice(1)} Album</h1>
        <div class="album-gallery" id="album-gallery"></div>
        <button class="back-button" onclick="loadGallery()">Back to Gallery</button>
    `;
    
    const images = albums[album];
    const gallery = document.getElementById('album-gallery');
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Gallery Image';
        img.classList.add('album-img');
        img.addEventListener('click', () => {
            openZoomedImage(image); // Zoom image on click
        });
        gallery.appendChild(img);
    });
}

// Open zoomed-in image in place
function openZoomedImage(imageUrl) {
    // Create the zoomed-in image container
    const zoomedImage = document.createElement('div');
    zoomedImage.classList.add('zoomed-image-container');

    zoomedImage.innerHTML = `
        <img src="${imageUrl}" alt="Zoomed Image" class="zoomed-image">
    `;

    // Append the zoomed image container to the body
    document.body.appendChild(zoomedImage);

    // Close the zoomed image when the container is clicked
    zoomedImage.addEventListener('click', () => {
        zoomedImage.remove();  // Remove the zoomed image container when clicked
    });
}

// Initialize content load on page load
window.addEventListener('load', loadContent);

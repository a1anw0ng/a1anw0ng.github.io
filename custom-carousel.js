document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('slide-iframe');
    const carousel = document.getElementById('carousel2');

    // Ensure iframe doesn't block carousel controls
    iframe.style.pointerEvents = 'none';

    carousel.addEventListener('slide.bs.carousel', () => {
        // Disable iframe interaction on slide change
        iframe.style.pointerEvents = 'none';
    });

    iframe.addEventListener('mouseenter', () => {
        // Allow iframe interaction when user hovers over it
        iframe.style.pointerEvents = 'auto';
    });

    iframe.addEventListener('mouseleave', () => {
        // Re-disable iframe interaction when mouse leaves
        iframe.style.pointerEvents = 'none';
    });


    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('close');

    // Bind click event to thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            if (thumbnail.src) {
                modalImage.src = thumbnail.src; // Set modal image source
                modal.style.display = 'flex';  // Show the modal
            }
        });
    });

    // Close the modal when 'X' button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});

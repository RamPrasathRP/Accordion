document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.content-container');

    // Add click event listener to each accordion item
    accordionItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Toggle the active class on the clicked item
            item.classList.toggle('active');
        });
    });
});

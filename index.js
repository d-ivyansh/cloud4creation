const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    item.addEventListener('click', () => {
        const toggleItem = item.querySelector('.toggle'); // Corrected selector
        const arrow = item.querySelector('.arrow'); // Corrected selector
        // Check if arrow_up.svg is currently displayed
        if (arrow.getAttribute('src') === './assets/arrow_up.svg') {
            // Change the image source to arrow_down.svg
            arrow.setAttribute('src', './assets/arrow_down.svg');
        } else {
            // Change the image source to arrow_up.svg
            arrow.setAttribute('src', './assets/arrow_up.svg');
        }

        toggleItem.classList.toggle('hidden');
        
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
document.addEventListener('contextmenu', event => event.preventDefault());


const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const toggleItem = item.querySelector('.toggle');
        const arrow = item.querySelector('.arrow'); 
        
      
        toggleItem.classList.remove('hidden');
        
       
        arrow.setAttribute('src', './assets/arrow_up.svg');
    });

    item.addEventListener('mouseleave', () => {
        const toggleItem = item.querySelector('.toggle');
        const arrow = item.querySelector('.arrow'); 
        
        toggleItem.classList.add('hidden');
        
        arrow.setAttribute('src', './assets/arrow_down.svg');
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

  
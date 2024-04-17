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


  // Get all accordion buttons
  const accordionButtons = document.querySelectorAll('.accordion-button');
            
  // Loop through each accordion button
  accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Toggle the 'hidden' class on the next element, which is the content
          const content = this.nextElementSibling;
          content.classList.toggle('hidden');

          // Rotate the accordion icon
          const icon = this.querySelector('.accordion-icon');
          icon.classList.toggle('rotate-180');
      });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const question = item.querySelector('.accordion-question');
        const answer = item.querySelector('.accordion-answer');

        question.addEventListener('click', function () {
            // Close all accordion items except the one clicked
            accordionItems.forEach(accordionItem => {
                if (accordionItem !== item) {
                    const otherAnswer = accordionItem.querySelector('.accordion-answer');
                    const otherIcon = accordionItem.querySelector('.arrow');
                    otherAnswer.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                }
            });

            // Toggle visibility of the clicked item
            answer.classList.toggle('hidden');
            const icon = question.querySelector('.arrow');
            icon.classList.toggle('rotate-180');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;
  const totalItems = items.length;
  const itemWidth = items[0].clientWidth + 10;

  prevBtn.addEventListener('click', function () {
    index = index > 0 ? index - 1 : totalItems - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', function () {
    index = index < totalItems - 1 ? index + 1 : 0;
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -index * itemWidth;
    track.style.transform = `translateX(${translateValue}px)`;
  }
});
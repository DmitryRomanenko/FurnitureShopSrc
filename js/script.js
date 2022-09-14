/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ? document.removeEventListener('mousemove', parallax)
  : document.addEventListener('mousemove', parallax);
function parallax(e) {
  document.querySelectorAll('.promo__img').forEach((item) => {
    let movingVal = item.getAttribute('data-value');
    item.style.transform = `translateX(${(e.clientX * movingVal) / 250}px)
    translateY(${(e.clientY * movingVal) / 250}px)`;
  });
}
document.querySelector('.menu__block').addEventListener('change', (e) => {
  document.querySelector('.categories').classList.toggle('categories__active');
});

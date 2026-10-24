(function () {
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
  var bar = document.getElementById('mobileBuy');
  var hero = document.getElementById('top');
  if (bar && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var show = !entries[0].isIntersecting;
      bar.classList.toggle('show', show);
    }, { threshold: 0 }).observe(hero);
  }
})();

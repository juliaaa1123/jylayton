(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  var close = document.createElement('button');
  close.className = 'close'; close.setAttribute('aria-label', 'Close menu'); close.textContent = '×';
  nav.appendChild(close);
  function set(open) { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); }
  btn.addEventListener('click', function () { set(true); });
  close.addEventListener('click', function () { set(false); });
})();

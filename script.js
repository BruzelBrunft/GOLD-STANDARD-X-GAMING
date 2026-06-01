function toggleMenu(){document.querySelector('.navlinks').classList.toggle('open')}
var io=new IntersectionObserver(function(e){e.forEach(function(n){if(n.isIntersecting){n.target.classList.add('in');io.unobserve(n.target)}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(Math.min(i%6,5)*.07)+'s';io.observe(el)});

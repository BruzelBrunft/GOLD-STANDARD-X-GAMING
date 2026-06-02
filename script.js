function toggleMenu(){document.querySelector('.navlinks').classList.toggle('open')}

/* Reveal-on-scroll */
var io=new IntersectionObserver(function(e){e.forEach(function(n){if(n.isIntersecting){n.target.classList.add('in');io.unobserve(n.target)}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(Math.min(i%6,5)*.07)+'s';io.observe(el)});

/* Game-Mode Tabs */
function switchMode(btn,id){
  var tabs=btn.parentNode.querySelectorAll('.mode-tab');
  tabs.forEach(function(t){t.classList.remove('active')});
  btn.classList.add('active');
  var panels=document.querySelectorAll('.mode-panel');
  panels.forEach(function(p){p.style.display='none'});
  var target=document.getElementById(id);
  if(target)target.style.display='block';
}

/* Accordion */
function toggleAcc(btn){
  var item=btn.parentNode;
  var open=item.classList.contains('open');
  item.classList.toggle('open');
  btn.setAttribute('aria-expanded',(!open).toString());
}

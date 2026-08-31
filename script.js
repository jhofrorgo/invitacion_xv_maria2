const eventDate = new Date('2026-10-03T18:00:00-05:00').getTime();
const $ = id => document.getElementById(id);
function updateCountdown(){
  let diff = eventDate - Date.now();
  if(diff < 0) diff = 0;
  const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
  $('days').textContent=String(d).padStart(2,'0'); $('hours').textContent=String(h).padStart(2,'0'); $('minutes').textContent=String(m).padStart(2,'0'); $('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const modal=$('rsvpModal');
$('openRsvp').onclick=()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false')};
$('closeRsvp').onclick=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')};
modal.addEventListener('click',e=>{if(e.target===modal)$('closeRsvp').click()});
$('rsvpForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=$('guestName').value.trim(); const attendance=$('attendance').value; const guests=$('guests').value; const message=$('message').value.trim();
  const text=`✨ *Confirmación Mis XV Años de María Alejandra Ariza Chaparro* ✨\n\nNombre: ${name}\nAsistencia: ${attendance}\nNúmero de personas: ${guests}${message?`\nMensaje: ${message}`:''}`;
  window.open(`https://wa.me/573157816771?text=${encodeURIComponent(text)}`,'_blank');
});

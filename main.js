function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);
  const formattedTime = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  document.getElementById('clock').textContent = `${formattedDate} — ${formattedTime}`;
}

setInterval(updateClock, 1000);
updateClock(); // Run immediately

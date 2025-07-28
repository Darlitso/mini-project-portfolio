
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
  document.getElementById( 'date').textContent = now.toLocaleDateString(undefined, options);

}


setInterval(updateClock, 1000);
updateClock();

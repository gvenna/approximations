// First popup: Help Window
document.getElementById("open-popup-1").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popup-1").style.display = "block";
});
document.getElementById("close-popup-1").addEventListener("click", function () {
    document.getElementById("popup-1").style.display = "none";
});

// Second popup: April 7 Library Folder
document.getElementById("open-popup-2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popup-2").style.display = "block";
});
document.getElementById("close-popup-2").addEventListener("click", function () {
    document.getElementById("popup-2").style.display = "none";
});


// Third popup: Media Player Folder
const openBtn = document.getElementById("open-media-player");
const popup = document.getElementById("media-player-popup");
const closeBtn = document.getElementById("close-media-player");
    
openBtn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.style.display = "block";
});
    
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // hour 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes} ${ampm}`;
    document.getElementById('start-clock').textContent = timeString;
  }

  // Update every second
  setInterval(updateClock, 1000);
  updateClock(); // Run once immediately
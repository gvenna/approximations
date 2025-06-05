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

// Third popup: Recycle Bin 
/*
document.getElementById("open-popup-3").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popup-3").style.display = "block";
});
document.getElementById("close-popup-3").addEventListener("click", function () {
    document.getElementById("popup-3").style.display = "none";
}); 
*/

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    const timeString = `${hours}:${minutes} ${ampm}`;
    const clockElement = document.getElementById('start-clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

setInterval(updateClock, 1000);
updateClock(); // Update immediately



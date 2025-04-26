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
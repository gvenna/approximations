var paragraph = "A problem has been detected and Windows has been shut down to prevent damage to your computer. <br/><br/>A process or thread crucial to system operation has unexpectedly exited or been terminated. <br/><br/>If this is the first time you've seen this stop error screen,<br/>restart your computer. If this screen appears again, follow <br/>these steps:<br/><br/>Check to make sure any new hardware or software is properly installed.<br/>If this is a new installation, ask your hardware or software manufacturer<br/>for any Windows updates you might need.<br/><br/>If problems continue, disable or remove any newly installed hardware<br/>or software. Disable BIOS memory options such as caching or shadowing.<br/>If you need to use Safe Mode to remove or disable components, restart<br/>your computer, press F8 to select Advanced Startup Options, and then<br/>select Safe Mode.<br/><br/>Technical information:<br/><br/>*** STOP: 0x00000050 (0xFD3094C2,0x00000001,0xFBFE7617,0x00000000)<br/><br/><br/>Collecting data for crash dump ...<br/>Initializing disk for crash dump ...";

var p_len = paragraph.length+2;

let i = 0;

function type() {
  document.querySelector('.bsod').innerHTML = paragraph.substring(0, i);
  if (i < p_len) {
    window.requestAnimationFrame(type);
    i++;
  }
}

window.requestAnimationFrame(type);
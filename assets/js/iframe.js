function synchronizeIframeSize() {
  const iframe = document.getElementById("navigation");
  iframe.style.width = window.innerWidth * 0.3 + "px";
  iframe.style.height = window.innerHeight + "px";
}

window.onresize = synchronizeIframeSize;
window.onload = synchronizeIframeSize;
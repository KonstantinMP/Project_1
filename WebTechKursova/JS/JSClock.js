function showCurrentTime() {
    const timeEl = document.getElementById("time");
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const display = hour + ":" + min + ":" + sec;
  
    timeEl.innerHTML = display;
  }
  
  function showCurrentDay() {
    const dateEl = document.getElementById("date");
    const now = new Date();
    
  }
  
  showCurrentTime();
  
  setInterval(function () {
    showCurrentTime();
  }, 1000);
  
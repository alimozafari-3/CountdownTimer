let endDate = document.querySelector("input[name='endDate']");
let clock = document.querySelector(".clock");
let sec = document.querySelector(".seconds");
let timeinterval;
let timestop = true;

endDate.addEventListener("change", () => {
    let timeG =endDate.value;
    clearInterval(timeinterval);
    limite(timeG);
  });
  
  function limite(s) {
    function xx() {b
      let temp = stop(s);
      if (temp.totale < 0) {
        clearInterval(timeinterval);
        
      }
      for (let key in temp) {
        let el = clock.querySelector("." + key);
        if (el) {
          el.innerText = temp[key];
        }
      }
    }
  
    timeinterval = setInterval(xx, 1000);
  }
  
  function stop(s) {
    let timex = new Date();
    let t = Date.parse(s) - Date.parse(timex);
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hous = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      totale: t,
      days: days,
      hours: hous,
      minutes: minutes,
      seconds: seconds,
    };
  }
  
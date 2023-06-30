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
  
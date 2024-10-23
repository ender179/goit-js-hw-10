import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as c,i as l}from"./assets/vendor-BbbuE1sJ.js";const t={inputEl:document.getElementById("datetime-picker"),showDays:document.querySelector("span[data-days]"),showHours:document.querySelector("span[data-hours]"),showMinutes:document.querySelector("span[data-minutes]"),showSeconds:document.querySelector("span[data-seconds]"),startBtn:document.querySelector("button[data-start]")};t.startBtn.disabled=!0;let s,o,a;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(s=e[0],o=s-Date.now(),o<1){l.error({color:"red",position:"topRight",message:"Please choose a date in the future"}),t.startBtn.disabled=!0;return}else t.startBtn.disabled=!1}};c(t.inputEl,h);function m(e){const r=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:d,minutes:u,seconds:i}}t.startBtn.addEventListener("click",p);function p(e){t.startBtn.disabled=!0,t.inputEl.disabled=!0,a=setInterval(()=>{o=s-Date.now();const n=m(o);t.showDays.textContent=n.days.toString().padStart(2,0),t.showHours.textContent=n.hours.toString().padStart(2,0),t.showMinutes.textContent=n.minutes.toString().padStart(2,0),t.showSeconds.textContent=n.seconds.toString().padStart(2,0),o<1e3&&(clearInterval(a),t.inputEl.disabled=!1)},1e3)}
//# sourceMappingURL=01-timer.js.map

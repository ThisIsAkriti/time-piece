setInterval(setClock, 1000)

let hourHand = document.querySelector('[data-hour-hand]');
let minuteHand = document.querySelector('[data-minute-hand]');
let secondHand = document.querySelector('[data-second-hand]');

function setClock(){
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds()/60;
  const minuteRatio = (currentDate.getMinutes())/60;
  const hourRatio = ( minuteRatio + currentDate.getHours())/12;
 
  setRotation(hourHand, hourRatio)
  setRotation(minuteHand, minuteRatio)
  setRotation(secondHand, secondsRatio)
}
function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360)
}


setClock(); 
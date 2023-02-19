


const container = document.getElementById('container');
const text = document.getElementById('text');
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


breathAnimation();

function breathAnimation() {
text.innerText = 'Breath In!';
container.className = 'container grow';


setTimeout(() =>  {
text.innerText = 'Hold';

setTimeout(() => {
text.innerText = 'Breath Out!';
container.className = 'container shrink';  
}, holdTime);  
}, breatheTime);
}
setInterval(breathAnimation, totalTime);






var Timer = function(opts) {
  var self = this;

  self.opts     = opts || {};
  self.element  = opts.element || null;
  self.minutes  = opts.minutes || 0;
  self.seconds  = opts.seconds || 30;

  self.start = function() {
    self.interval = setInterval(countDown, 1000);
  };

  self.stop = function() {
    clearInterval(self.interval);
  };

  function countDown() {
    self.seconds--;
    if (self.minutes == 0 && self.seconds == 0) {
      self.stop();
    }

    if (self.seconds < 0) {
      self.seconds = 59;
      self.minutes--;
    }

    if (self.seconds <= 9) { self.seconds = '0' + self.seconds; }

    self.element.textContent = self.minutes + ' : ' + self.seconds;
  }
};

var myTimer = new Timer({
  minutes: 4,
  seconds: 59,
  element: document.querySelector('#timer')
});

myTimer.start();









const container = document.getElementById('container');
const text = document.getElementById('text');
const totalTime = 1700;
const breatheTime = (totalTime / 15) * 6;
const holdTime = totalTime / 15;


breathAnimation();

function breathAnimation() {
text.innerText = 'Press Start';
container.className = 'container grow';


setTimeout(() =>  {
text.innerText = '';

setTimeout(() => {
text.innerText = '';
container.className = 'container shrink';  
}, holdTime);  
}, breatheTime);
}
setInterval(breathAnimation, totalTime);



function start()  {
window.location.href = "breath.html";
}

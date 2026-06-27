const div=document.getElementById('time');

setInterval(()=>{
const time=new Date();
div.textContent=time.toLocaleTimeString();
},1000)
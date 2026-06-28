const body=document.querySelector('body');

body.addEventListener('click',(e)=>{
    
    const circleelement=document.createElement('div');
circleelement.id='circle';
circleelement.textContent="KRSN"

const color=['red','blue','purple','grey','yellow','pink'];
circleelement.style.backgroundColor=color[Math.floor(Math.random()*6)];

circleelement.style.top=`${e.clientY-25}px`;
circleelement.style.left=`${e.clientX-25}px`;

body.append(circleelement);

setTimeout(()=>{
    circleelement.remove();
},5000)
})
const form =document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

   const boy=document.getElementById('boy');
   const girl=document.getElementById('girl');
   
   const boylength=boy.value.length;
   const girllength=girl.value.length;

   const result=Math.pow(boylength+girllength,3)%101;

   document.querySelector('h2').textContent=`Result:${result}%`;
   form.reset();
})
const form = document.querySelector('form');
const input = document.querySelector('input');
const tasks = document.getElementById('alltask');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const texts = input.value.trim();

  if (texts === "")
return;

  const parent = document.createElement('div');
  parent.style.marginTop="20px";

  const task = document.createElement('span');
  task.textContent = texts;
  task.style.fontSize="30px";
  task.style.marginRight = "20px";

  const donebutton = document.createElement('button');
  donebutton.textContent = "Done";
  donebutton.style.marginRight = "10px";
  donebutton.style.width = "80px";

  const deletebutton = document.createElement('button');
  deletebutton.textContent = "Delete";
  deletebutton.style.width = "80px";

  parent.append(task,donebutton,deletebutton);

  tasks.append(parent);

  deletebutton.addEventListener('click',()=>{
    parent.remove();
  })

  donebutton.addEventListener('click',()=>{
    task.classList.toggle('completed');
    task.style.textDecoration='line-through';
    task.style.color='grey';
  })

  
  form.reset();
});



document.querySelector('#push').onclick = function() 
{ //Listans funktion, när du klickar på #push

    if(document.querySelector('#newtask input').value.length == 0){ //Om #newtask inputs värde = 0 (inget) --> Alert som säger till
         alert("Please Enter a Task");
       }
       else{ //Annars... vid #tasks blir det den plus class="tasks och span med id="taskname" och knapp med klassen .delete, alltså aktiveras ny class och id
         document.querySelector('#tasks').innerHTML += `<div class="task"> 
         <span id="taskname"> 
         ${document.querySelector('#newtask input').value} 
         </span>
         <button class="delete">X</button>
         </div>
         `;
  
    var current_tasks = document.querySelectorAll('.delete'); // classen .delete blir var "currant_tasks"
  
    for (var i = 0; i < current_tasks.length; i++) { //Loop
           current_tasks[i].onclick = function (){ //När du klickar på en av de currant_tasks aktiveras funktionen --> som gör att den raden blir removed
             this.parentNode.remove();
           }
  
         }
  
   var tasks = document.querySelectorAll('#taskname'); // id:t #taskname blir var tasks
  
         for (var i = 0; i < tasks.length; i++) { //Loop
           tasks[i].onclick = function (){ // När du klickar på någon av #newtasks aktiveras en function som gör att den blir avklarad/avstruken
             this.classList.toggle('completed');
           }
  
         }
  
         document.querySelector('#newtask input').value = ""; //Newtask inputet värde blir: ""
  
       }
     }
     
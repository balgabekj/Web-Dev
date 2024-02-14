
function addTask1() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if(taskText === ""){
    alert('Please enter a task');
    return;
  }
  // Create new li element and set its text to the input's value
  
  const  listItem = document.createElement('li');
  listItem.textContent = taskText;
  
  const list = document.getElementById('list');
  list.appendChild(listItem);

  taskInput.value = '';

  listItem.addEventListener('click', function() {
    this.classList.toggle('checked');
  });
  
  // Make a button for deleting tasks, add it to our li
  
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<img src="img/delete.svg" alt="Delete">';
  deleteButton.classList.add('deleteButton');
  deleteButton.addEventListener( 'click', function ()  {
    list.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);
} 
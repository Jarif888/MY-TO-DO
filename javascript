// Get HTML elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';
    
    // Create text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    
    // Click to mark complete
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    // Click to delete
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    // Assemble task
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    // Clear input
    taskInput.value = '';
}

// Event listeners
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

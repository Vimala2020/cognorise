let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    renderTasks(); // Call the function to update the task list
    taskInput.value = ''; // Clear the input field after adding the task
  }
  console.log(tasks);
};

const renderTasks = () => {
  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = ''; // Clear the existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
    <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
    <label for="task-${index}">${task.text}</label>
    <i class="fas fa-trash-alt delete-icon" onclick="deleteTask(${index})"></i>
  `;
    taskList.appendChild(li);
  });

  updateProgress();
};

const deleteTask = (index) => {
  tasks.splice(index, 1); // Remove the task from the array
  renderTasks(); // Re-render the task list
};

const updateProgress = () => {
  const progress = document.getElementById('progress');
  const numbers = document.getElementById('numbers');
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  if (totalTasks > 0) {
    const percentage = (completedTasks / totalTasks) * 100;
    progress.style.width = `${percentage}%`;
  } else {
    progress.style.width = '0%';
  }

  numbers.textContent = `${completedTasks}/${totalTasks}`;
};

document.querySelector('.task-list').addEventListener('change', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const index = e.target.id.split('-')[1];
    tasks[index].completed = e.target.checked;
    updateProgress(); // Update the progress bar when a task is checked/unchecked
  }
});

document.getElementById('newTask').addEventListener('click', function (e) {
  e.preventDefault();
  addTask();
});

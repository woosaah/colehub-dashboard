let tasks = [];

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.description;
    li.className = task.done ? 'done' : '';
    li.onclick = () => {
      task.done = !task.done;
      saveTasks();
      renderTasks();
    };
    list.appendChild(li);
  });
}

function loadTasks() {
  fetch('/api/tasks')
    .then(res => res.json())
    .then(data => {
      tasks = data;
      renderTasks();
    });
}

function saveTasks() {
  fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tasks)
  });
}

loadTasks();

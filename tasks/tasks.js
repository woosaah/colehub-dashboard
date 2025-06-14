fetch('tasks.json')
  .then(res => res.json())
  .then(tasks => {
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.text;
      li.className = task.done ? 'done' : '';
      li.addEventListener('click', () => {
        task.done = !task.done;
        li.className = task.done ? 'done' : '';
        saveTasks(tasks); // Save state to localStorage or backend
      });
      taskList.appendChild(li);
    });
  });

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

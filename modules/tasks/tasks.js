fetch('data/tasks.json')
  .then(res => res.json())
  .then(data => {
    const taskList = document.getElementById('task-list');
    data.tasks.forEach(task => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = task.id;

      const label = document.createElement('label');
      label.htmlFor = task.id;
      label.textContent = task.name;

      li.appendChild(checkbox);
      li.appendChild(label);
      taskList.appendChild(li);
    });
  })
  .catch(err => {
    console.error('Error loading tasks:', err);
  });

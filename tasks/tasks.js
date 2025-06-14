<script>
  async function loadTasks() {
    const res = await fetch('/api/tasks');
    const tasks = await res.json();

    const list = document.getElementById('task-list');
    list.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title + (task.completed ? ' ✅' : '');
      list.appendChild(li);
    });
  }

  loadTasks();
</script>

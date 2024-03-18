const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma tarefa
function addTask(task) {
  tasks.push(task);
  renderTasks();
}

// Função para renderizar as tarefas na lista
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
      <div>
        <button onclick="toggleTask(${index})">${task.completed ? 'Desfazer' : 'Concluir'}</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Excluir</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

// Função para alternar o estado de uma tarefa (concluída/não concluída)
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Função para deletar uma tarefa
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Evento de envio do formulário para adicionar uma nova tarefa
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskTitle = taskInput.value.trim();
  if (taskTitle !== '') {
    const newTask = {
      title: taskTitle,
      completed: false
    };
    addTask(newTask);
    taskInput.value = '';
  }
});

// Renderiza as tarefas iniciais
renderTasks();

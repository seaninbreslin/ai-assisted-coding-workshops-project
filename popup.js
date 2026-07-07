const STORAGE_KEY = 'kainos-todo:todos';

const state = {
  todos: [],
  filter: 'all',
  aiLoading: false,
};

// ── Persistence ────────────────────────────────────────────────

function loadState() {
  if (typeof chrome !== 'undefined' && chrome.storage?.local) {
    chrome.storage.local.get([STORAGE_KEY], (result) => {
      state.todos = Array.isArray(result[STORAGE_KEY]) ? result[STORAGE_KEY] : [];
      render();
    });
    return;
  }

  render();
}

function saveState() {
  if (typeof chrome !== 'undefined' && chrome.storage?.local) {
    chrome.storage.local.set({ [STORAGE_KEY]: state.todos });
  }
}

// ── Business logic ─────────────────────────────────────────────

function addTodo(text) {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return;
  }

  state.todos.unshift({
    id: Date.now(),
    text: trimmedText,
    done: false,
    createdAt: new Date().toISOString(),
    priority: null,
  });

  saveState();
  render();
}

function toggleTodo(id) {
  state.todos = state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }

    return todo;
  });

  saveState();
  render();
}

function deleteTodo(id) {
  state.todos = state.todos.filter((todo) => todo.id !== id);
  saveState();
  render();
}

function setFilter(filter) {
  state.filter = filter;
  render();
}

function getVisibleTodos() {
  if (state.filter === 'active') {
    return state.todos.filter((todo) => !todo.done);
  }

  if (state.filter === 'done') {
    return state.todos.filter((todo) => todo.done);
  }

  return state.todos;
}

function setPriority(id, priority) {
  state.todos = state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, priority };
    }

    return todo;
  });

  saveState();
  render();
}

// ── Render ─────────────────────────────────────────────────────

function renderList() {
  const list = document.getElementById('todo-list');
  const visible = getVisibleTodos();
  list.innerHTML = visible.map((todo) => `
    <li class="todo-item${todo.done ? ' done' : ''}" data-id="${todo.id}">
      <input class="todo-checkbox" type="checkbox" ${todo.done ? 'checked' : ''} />
      <span class="todo-text">${todo.text}</span>
      ${todo.priority ? `<span class="priority-badge priority-${todo.priority}">${todo.priority}</span>` : ''}
      <button class="btn-delete" title="Delete">✕</button>
    </li>
  `).join('');
}

function renderEmptyState() {
  const empty = document.getElementById('empty-state');
  empty.style.display = getVisibleTodos().length === 0 ? 'block' : 'none';
}

function renderFilterBar() {
  document.querySelectorAll('.filter-btn').forEach((button) => {
    const isActive = button.dataset.filter === state.filter;
    button.classList.toggle('active', isActive);
  });
}

function renderStats() {
  const total = state.todos.length;
  const done = state.todos.filter((todo) => todo.done).length;
  const active = total - done;

  document.getElementById('stats').textContent = `${active} task${active !== 1 ? 's' : ''} left`;

  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = (total === 0 ? 0 : Math.round((done / total) * 100)) + '%';

  const countEl = document.getElementById('task-count');
  if (countEl) countEl.textContent = total === 0 ? '' : `${done} / ${total} done`;
}

function render() {
  renderList();
  renderEmptyState();
  renderFilterBar();
  renderStats();
}

// ── Event wiring ───────────────────────────────────────────────

function initHandlers() {
  const addForm = document.getElementById('add-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const filterBar = document.getElementById('filter-bar');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
    todoInput.focus();
  });

  todoList.addEventListener('change', (event) => {
    const checkbox = event.target.closest('.todo-checkbox');
    if (!checkbox) {
      return;
    }

    const todoItem = checkbox.closest('.todo-item');
    if (todoItem) {
      toggleTodo(Number(todoItem.dataset.id));
    }
  });

  todoList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.btn-delete');
    if (!deleteButton) {
      return;
    }

    const todoItem = deleteButton.closest('.todo-item');
    if (todoItem) {
      deleteTodo(Number(todoItem.dataset.id));
    }
  });

  filterBar.addEventListener('click', (event) => {
    const filterButton = event.target.closest('.filter-btn');
    if (!filterButton) {
      return;
    }

    setFilter(filterButton.dataset.filter);
  });

  document.getElementById('options-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('options.html');
  });
}

// ── AI Feature (Task 5) ────────────────────────────────────────

async function suggestPriority(id) {
}

// ── Boot ───────────────────────────────────────────────────────

loadState();
initHandlers();

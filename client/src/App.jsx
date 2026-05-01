import './App.css';
import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, toggleTodoDone, deleteTodo } from './services/api';

//start of app
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTodos();
  }, []);
// Fetchtodos
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await getTodos();
      setTodos(res.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Is the server running?');
    } finally {
      setLoading(false);
    }
  };
// Add a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter a title for your TODO.');
      return;
    }

    try {
      await createTodo({ title, description }); 
      setTitle('');
      setDescription('');
      setError('');
      setSuccess('Task added successfully!');
      setTimeout(() => setSuccess(''), 3000);
      fetchTodos();
    } catch (err) {
      setError('Could not add TODO.');
    }
  };
// Toggle done status
  const handleToggle = async (id) => {
    try {
      await toggleTodoDone(id);
      setSuccess('Task updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      fetchTodos();
    } catch (err) {
      setError('Failed to update status.');
    }
  };
// Delete a todo
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTodo(id);
        setSuccess('Task deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
        fetchTodos();
      } catch (err) {
        setError('Failed to delete TODO.');
      }
    }
  };
//  edit todo
  const handleEdit = (todo) => {
    setEditingId(todo._id);
    setEditForm({ title: todo.title, description: todo.description });
  };

  const handleSaveEdit = async (id) => {
    if (!editForm.title.trim()) {
      setError('Please enter a title for your TODO!...');
      return;
    }
    try {
      await updateTodo(id, editForm);
      setEditingId(null);
      setEditForm({ title: '', description: '' });
      setError('');
      setSuccess('Task saved successfully!');
      setTimeout(() => setSuccess(''), 3000);
      fetchTodos();
    } catch (err) {
      setError('Failed to update TODO.');
    }
  };
// cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: '', description: '' });
  };

  return (
    <div className="app-container">
      <h1>Todo Management</h1>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}


      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title (Required)"
          className="todo-input"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (Optional)"
          className="todo-textarea"
        />
        <button type="submit" disabled={loading} className="add-btn">
          {loading ? 'Saving...' : 'Add Task'}
        </button>
      </form>


      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className={todo.done ? 'todo-item done' : 'todo-item'}>
            {editingId === todo._id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="todo-input"
                  placeholder="Title"
                />
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="todo-textarea"
                  placeholder="Description"
                />
                <div className="edit-buttons">
                  <button onClick={() => handleSaveEdit(todo._id)} className="save-btn">Save</button>
                  <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div className="todo-left">
                  <strong className={todo.done ? 'todo-title done' : 'todo-title'}>
                    {todo.title}
                  </strong>
                  {todo.description && (
                    <p className="todo-desc">{todo.description}</p>
                  )}
                </div>
                <div className="action-buttons">
                  <button onClick={() => handleEdit(todo)} className="action-btn edit">Edit</button>
                  <button onClick={() => handleToggle(todo._id)} className="action-btn">{todo.done ? 'Undo' : 'Done'}</button>
                  <button onClick={() => handleDelete(todo._id)} className="action-btn delete">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
//end of app
export default App;
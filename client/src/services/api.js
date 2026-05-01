import axios from 'axios';
// Base URL for API
const API_URL = 'http://localhost:5000/api/todos';


// API functions
export const getTodos = () => axios.get(API_URL);
export const createTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, updatedTodo) => axios.put(`${API_URL}/${id}`, updatedTodo);
export const toggleTodoDone = (id) => axios.patch(`${API_URL}/${id}/done`);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
import httpCommon from './http.common';

class DataService {
  getTaskList() {
    return httpCommon.get('/todo');
  }

  getTask(id) {
    return httpCommon.get(`/todo/${id}`);
  }

  createTask(data) {
    return httpCommon.post('/todo', data);
  }

  completeTask(id, data) {
    return httpCommon.put(`/todo/${id}`, data);
  }

  deleteTask(id) {
    return httpCommon.delete(`/todo/${id}`);
  }
}

export default new DataService();

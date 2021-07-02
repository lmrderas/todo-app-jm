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

  completeTask(data) {
    return httpCommon.put('/todo', data);
  }

  deleteTask(id) {
    return httpCommon.delete(`/todo/${id}`);
  }
}

export default new DataService();

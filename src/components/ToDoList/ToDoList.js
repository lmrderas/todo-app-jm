import React, { useState, useEffect } from 'react';
import CreateTask from '../Modal/CreateTask';
import services from '../../services/services';
import ToDoItem from '../ToDoItem';
function ToDoList() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    getTaskList();
  }, []);
  const getTaskList = () => {
    services
      .getTaskList()
      .then((response) => {
        setTasks(response.data.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getTask = () => {};
  return (
    <>
      <div className="header text-center">
        <h3>ToDo List</h3>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div>
        <ul className="list-group">
          {tasks &&
            tasks.map((task, index) => (
              <ToDoItem taskObj={task} index={index} />
            ))}
        </ul>
      </div>
      <CreateTask toggle={toggle} modal={modal}></CreateTask>
    </>
  );
}

export default ToDoList;

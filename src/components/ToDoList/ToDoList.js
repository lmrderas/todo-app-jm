import React, { useState } from 'react';
import CreateTask from '../Modal/CreateTask';
import services from '../../services/services';

function ToDoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const toggle = () => setModal(!modal);
  const saveTask = (taskObj) => {};
  return (
    <>
      <div className="header text-center">
        <h3>ToDo List</h3>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask}></CreateTask>
    </>
  );
}

export default ToDoList;

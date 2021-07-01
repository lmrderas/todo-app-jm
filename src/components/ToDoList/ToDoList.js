import React, { useState } from 'react';
import CreateTask from '../Modal/CreateTask';

function ToDoList() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="header text-center">
        <h3>ToDo List</h3>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <CreateTask toggle={toggle} modal={modal}></CreateTask>
    </>
  );
}

export default ToDoList;

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({ modal, toggle, save }) {
  const [task, setTask] = useState('');
  const [descrption, setDescription] = useState('');
  const [dueIn, setdueIn] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'task') {
      setTask(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'dueIn') {
      setdueIn(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj['name'] = task;
    taskObj['description'] = descrption;
    taskObj['dueDate'] = dueIn;
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <h3>Name of task</h3>
              <input
                type="text"
                name="task"
                className="form-control"
                value={task}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <h3>Description</h3>
              <textarea
                rows="7"
                name="description"
                className="form-control"
                value={descrption}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <h3>Due In</h3>
              <input
                type="date"
                name="dueIn"
                className="form-control"
                value={dueIn}
                onChange={handleChange}
              ></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;

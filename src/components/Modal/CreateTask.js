import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({ modal, toggle }) {
  const [task, setTask] = useState('');
  const [descrption, setDescription] = useState('');
  const [dueIn, setdueIn] = useState('');
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <h3>Name of task</h3>
              <input type="text" className="form-control" value={task}></input>
            </div>
            <div className="form-group">
              <h3>Description</h3>
              <textarea
                rows="7"
                className="form-control"
                value={descrption}
              ></textarea>
            </div>
            <div className="form-group">
              <h3>Due In</h3>
              <input type="date" className="form-control" value={dueIn}></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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

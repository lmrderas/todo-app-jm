import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import services from '../../services/services';
function CreateTask({ modal, toggle }) {
  const initialState = {
    id: null,
    name: '',
    description: '',
    DueIn: '',
  };
  const [task, setTask] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const saveTask = () => {
    var data = {
      name: task.name,
      description: task.description,
      DueIn: task.DueIn,
    };
    services
      .createTask(data)
      .then((response) => {
        setTask({
          id: response.data.data.id,
          name: response.data.data.name,
          description: response.data.data.description,
          DueIn: response.data.data.dueDate,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTask = () => {
    setTask(initialState);
    setSubmitted(false);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <div className="submit-form">
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newTask}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Task Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={task.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={task.description}
                    onChange={handleInputChange}
                    name="description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Due Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="DueIn"
                    required
                    value={task.DueIn}
                    onChange={handleInputChange}
                    name="DueIn"
                  />
                </div>
              </div>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={saveTask}
            className="btn btn-success"
          >
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

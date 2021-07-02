import React, { useState } from 'react';
import { Button } from 'reactstrap';
import services from '';
function ToDoItem({ taskObj, index }) {
  const completeTask = () => {
    services
      .completeTask(index, taskObj)
      .then((response) => {
        console.log(response.data);
        alert('The tutorial was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTask = () => {
    services
      .deleteTask(index)
      .then((response) => {
        console.log(response.data);
        alert('The tutorial was completed!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div class="card-wrapper mr-5">
      <div class="task-holder">
        <p class="cards-headers">{taskObj.name}</p>
        <p className="mt-4">{taskObj.description}</p>
        <p className="mt-1">{taskObj.dueDate}</p>
        <p className="mt-1">{taskObj.isDone}</p>

        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <Button
            color="primary"
            onClick={completeTask}
            className="btn btn-success"
          >
            Complete
          </Button>{' '}
          <Button color="secondary" onClick={deleteTask}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;

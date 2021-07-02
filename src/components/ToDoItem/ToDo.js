import React from 'react';
import { Button } from 'reactstrap';
import services from '../../services/services';
import Moment from 'moment';

function ToDo({ taskObj, index }) {
  const completeTask = () => {
    let task = taskObj;
    task.isDone = true;
    services
      .completeTask(task)
      .then((response) => {
        console.log(response.data);
        alert('The task was completed!');
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
        alert('The task was deleted!');
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="card-wrapper mr-5">
      <div className="task-holder">
        <p className="cards-headers">{taskObj.name}</p>
        <p className="mt-4">{taskObj.description}</p>
        <p className="mt-1">
          {Moment(taskObj.dueDate).format('MMMM dS, yyyy')}
        </p>
        <p className="mt-1">{taskObj.isDone ? 'Completed' : 'not Completed'}</p>

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

export default ToDo;

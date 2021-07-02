import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import services from '../../services/services';
import Moment from 'moment';

function ToDo({ taskObj, index }) {
  const [taskStatus, settaskStatus] = useState('');

  const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) => {
    if (
      Moment(firstDate).startOf('day') - secondDate.setHours(0, 0, 0, 0) >=
      0
    ) {
      return false;
    }
    return true;
  };

  const completeTask = () => {
    let now = new Date();
    if (firstDateIsPastDayComparedToSecond(taskObj.dueDate, now)) {
      console.log('do nothing');
    } else {
      taskObj.isDone = true;
      services
        .completeTask(taskObj)
        .then((response) => {
          console.log(response.data);
          alert('The task was completed!');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const status = () => {
    let completed = taskObj.isDone;
    let datetime = Moment(taskObj.dueDate);
    let now = new Moment();
    let now2 = new Date();
    if (datetime.diff(now) < 0 && !completed) {
      console.log('Status: less than 12 hours remaining');
      settaskStatus('Status: less than 12 hours remaining');
    } else if (!completed && datetime.diff(now) > 0) {
      console.log('Status: more than 12 hours remaing');
      settaskStatus('Status: more than 12 hours remaing');
    } else if (firstDateIsPastDayComparedToSecond(taskObj.dueDate, now2)) {
      console.log('Status: Due date has past');
      settaskStatus('Status: Due date has past');
    } else {
      settaskStatus('Status: ------');
    }
  };

  const deleteTask = () => {
    let now2 = new Date();
    if (
      !firstDateIsPastDayComparedToSecond(taskObj.dueDate, now2) &&
      !taskObj.isDone
    ) {
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
    } else {
      console.log('do nothing');
    }
  };

  useEffect(() => {
    status();
  }, []);
  return (
    <div className="card-wrapper mr-5">
      <div className="task-holder">
        <p className="cards-headers">{taskObj.name}</p>
        <p className="mt-4">{taskObj.description}</p>
        <p className="mt-1">{Moment(taskObj.dueDate).format('MMMM Do YYYY')}</p>
        <p className="mt-1">
          Time Remaing: {Moment(taskObj.dueDate).format('HH')} Hours
        </p>
        <p className="mt-1">{taskObj.isDone ? 'Completed' : 'not Completed'}</p>
        <p className="mt-1">{taskStatus}</p>

        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <Button
            color="primary"
            onClick={completeTask}
            className="btn btn-success"
          >
            Complete
          </Button>{' '}
          <Button color="danger" onClick={deleteTask}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;

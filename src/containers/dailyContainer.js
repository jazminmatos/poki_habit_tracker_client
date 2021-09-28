import React from 'react';

const DailyContainer = (props) => {
    const taskList = props.tasks.map(task => <li>{task.description}</li>)
    return (
        <div>
            Hello from Daily Containers
            {taskList}
        </div>
    );
}

export default DailyContainer;

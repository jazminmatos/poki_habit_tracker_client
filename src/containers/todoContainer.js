import React from 'react';

const TodoContainer = (props) => {
    debugger
    const taskList = props.tasks.map(task => <li>{task.description}</li>)

    return (
        <div>
            Hello from Todo Container
                {taskList}
        </div>
    );
}

export default TodoContainer;

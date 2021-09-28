import React from 'react';

import DailyContainer from './DailyContainer';
import TodoContainer from './TodoContainer';

const TrackerContainer = (props) => {
    debugger
    const dailyTasks = props.tasks.filter(task => task.daily)
    const todoTasks = props.tasks.filter(task => !task.daily)

    return (
        <div>
            <DailyContainer tasks={dailyTasks}/>
            <TodoContainer tasks={todoTasks}/>
        </div>
    );
}

export default TrackerContainer;

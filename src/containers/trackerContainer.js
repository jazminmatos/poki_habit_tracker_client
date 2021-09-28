import React from 'react';

import DailyContainer from './DailyContainer';
import TodoContainer from './TodoContainer';

const TrackerContainer = () => {
    return (
        <div>
            <DailyContainer />
            <TodoContainer />
        </div>
    );
}

export default TrackerContainer;

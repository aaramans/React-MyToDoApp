import React from 'react';
import Clock from './clock.js';
import TaskList from './taskList.js';

function ContentComp() {
  return (
    <div className="container App-content">
        <Clock text="Time: "/>
        <TaskList/>
    </div>
  );
}

export default ContentComp;
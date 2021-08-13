import React from 'react'
import { useState } from 'react';

const TaskAssignment = ({AddTaskLog}) => {

    const [TaskDesc, setTaskDesc] = useState();
    const [Name, setName] = useState();
    const [TaskDate, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        AddTaskLog([TaskDesc, Name, TaskDate])
        // console.log(TaskDesc)
        // console.log(Name)
        // console.log(TaskDate) onClick={handleSubmit}
        

    }

    return(
        <div className="text-light">
            <form onSubmit={e => handleSubmit(e)}>
                <label>Task Description</label>
                <input type="text" name="taskDesc" value={TaskDesc} onChange={e=>setTaskDesc(e.target.value)}/>

                <label>Assigned to</label>
                <input type="text" name="assignName" value={Name} onChange={e=>setName(e.target.value)}/>

                <label>Date</label>
                <input type="date" name="assignDate" value={TaskDate} onChange={e=>setDate(e.target.value)}/>

                <input type='submit'  name="submit" value="Add Task" />
            </form>
        </div>
    )
}
export default TaskAssignment;
import React from 'react'

const TaskDisplay = (props) => {
    return (
        <>
            <table className="w-100 table table-striped table-bordered text-light text-center">
                <tr>
                <th>Task Description</th>
                <th>Name</th>
                <th>Task Date</th>
                </tr>
                {props.List.map((v, i) => {
                  return (
                    <tr>
                        <td>{v[0]}</td>
                        <td>{v[1]}</td>
                        <td>{v[2]}</td>
                    </tr>
                    )})}
            </table>
        </>
    )
}
export default TaskDisplay
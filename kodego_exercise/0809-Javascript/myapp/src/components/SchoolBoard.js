import React from 'react';
import BoardData from './BoardData';

const SchoolBoard = (props) => {
    return (
        <div>
            <h3 style={{display:!props.category && "none"}}>Question:{props.category}</h3>
            <h3 style={{color: !props.category && "blue"}}>Answer: {props.post}</h3>
            <hr/>
        </div>
    )
}

export default SchoolBoard

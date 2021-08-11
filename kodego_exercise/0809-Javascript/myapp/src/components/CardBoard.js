import React from 'react';
import CardData from './CardData';

const CardBoard = (props) => {
    const style3 = {
        display: "grid",
        position: "relative",
        float: "left",
        width: "23%",
        margin: "0 0 10px 10px",
        border:"1px solid black"
    }
    return (
        <div style={{display:"block"}}>
        <div style={style3}>
            <img src={props.imgsrc}/>
            <h3 style={{textAlign: "center"}}>Name:{props.name}</h3>
            <div>
            <h4 >Phone: {props.phone}</h4>
            <h4 >Email: {props.email}</h4>
        </div>
            </div>
        </div>
        
    )
}

export default CardBoard

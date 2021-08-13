import React from 'react';

const InventoryForm = ({prodName,amt,handleName,handleAmt,handleSubmit, handleDelete}) => {
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Product Name</label>
                <input type="text" value={prodName} onChange={handleName}/>
            <label>Amount</label>
                <input type="text" value={amt} onChange={handleAmt}/>
            <button type="submit">SUBMIT</button>
            <button type="button" onClick={handleDelete}>DELETE</button>
        </form>
        </>
    )
}


export default InventoryForm
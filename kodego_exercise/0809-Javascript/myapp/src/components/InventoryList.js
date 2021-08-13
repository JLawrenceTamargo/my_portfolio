import React from 'react'

const InventoryList = ({grandTotal}) => {

    return (
        <table className="w-25 table table-striped table-light text-center text-light">
            <tr>
                <th>Product Name</th>
                <th>Amount</th>
            </tr>
            {grandTotal.map(item => (
                <tr>
                    <td>{item.productName}</td>
                    <td>Php{item.totalAmt}</td>
                </tr>
                ))}
        </table> 
    )
}

export default InventoryList
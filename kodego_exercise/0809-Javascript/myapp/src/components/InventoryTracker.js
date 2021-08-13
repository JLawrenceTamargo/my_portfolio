import React, {useState, useEffect} from 'react'
import InventoryForm from './Inventory';
import InventoryList from './InventoryList';

const retrieveData =localStorage.getItem("inventory")? JSON.parse(localStorage.getItem("inventory")): [];

function InventoryTracker()
{
    const [productName, setProdName] = useState('');
    const [totalAmt, setTotalAmt] = useState(0);
    const [grandTotal, setGrandTotal] = useState(retrieveData);
    const handleName = e => {
        setProdName(e.target.value) ;
    }
    const handleAmt = e => {
        setTotalAmt(e.target.value);
    }
    const handleSubmit = e =>  {
        e.preventDefault();
        if (productName!=="" && totalAmt>0)
        {
            const product = {productName, totalAmt};
            setGrandTotal([...grandTotal, product]);
        }
        else
        {
            alert("Invalid Input");
        }
    }
    const handleDelete = () => {
        setGrandTotal([]);
        setProdName('');
        setTotalAmt('');
    }

    useEffect(() => {
        localStorage.setItem("inventory", JSON.stringify(grandTotal, null, 1));
        }, [grandTotal])
    

    return (
    <>
        <header><h1>Product Information</h1></header>
            <br /><InventoryForm 
            prodName={productName}
            amt={totalAmt}
            handleName={handleName}
            handleAmt={handleAmt}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            /><br />
            <InventoryList grandTotal={grandTotal}/>
        <h4>Grand Total: {grandTotal.reduce((accumulator, currentValue) => 
        {return (accumulator += parseFloat(currentValue.totalAmt))}, 0 ) }</h4>
    </>
    )
}

export default InventoryTracker
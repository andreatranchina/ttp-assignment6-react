import React from 'react'
import "./TableCell.css"

function TableCell(props) {

    //receives the currentColor prop from table and uses it set the background color of the clicked cell
    function handleClickColorCell(event){
        event.target.style.backgroundColor = props.currentColor;
    }

    return (
        <td className="cell" onClick={handleClickColorCell}>cell</td>
    )
}

export default TableCell
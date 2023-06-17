import React from 'react'
import "./TableCell.css"

function TableCell(props) {

    //receives the currentColor prop from table and uses it set the background color of the clicked cell
    function handleMouseOverColor(event){
        if(props.mouseDown){
            event.target.style.backgroundColor = props.currentColor;
        }
    }

    function handleMouseDownColor(event){
        event.target.style.backgroundColor = props.currentColor;
    }

    return (
        <td className="cell" onMouseOver={handleMouseOverColor} onMouseDown={handleMouseDownColor}></td>
    )
}

export default TableCell
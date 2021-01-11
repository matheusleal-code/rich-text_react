import React from 'react'
import './Input.css'

export default props => {
    return(
        <div className="display"><textarea value={props.value} onChange={props.onChange} className={props.fontStyle}></textarea></div>
    )
}
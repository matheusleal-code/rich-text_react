import React from 'react'
import './Button.css'

export default props => <button className="button"><i className={`fa fa-${props.buttonType}`} onClick={props.buttonAction}></i></button>
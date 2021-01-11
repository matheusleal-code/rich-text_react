import React, { Component} from 'react'
import './RichText.css'

import Button from '../components/Button'
import Input from '../components/Input'

const initialState = {
    text: 'texto',
    style:'',
    styles : []
}
class RichText extends Component{

    
    constructor(props){
        super(props)
        this.buttonActionItalic = this.buttonActionItalic.bind(this)
        this.buttonActionUnderline = this.buttonActionUnderline.bind(this)
        this.buttonActionBold = this.buttonActionBold.bind(this)
        this.state = initialState
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({text: e.target.value})
        console.log(e.target.value)
    }

    buttonActionItalic(){
        this.setState({style: 'italic'})
    }

    buttonActionBold(){
        this.setState({style: 'bold'})
    }

    buttonActionUnderline(){
        this.setState({style: 'underline'})
    }
    
    render(){
        return (
            <div className="rich-text">
                <Button buttonType='italic' buttonAction={this.buttonActionItalic}/>
                <Button buttonType='bold' buttonAction={this.buttonActionBold}/>
                <Button buttonType='underline' buttonAction={this.buttonActionUnderline}/>
                <Input value={this.state.text} onChange={this.handleChange} fontStyle={this.state.style}/>
            </div>
        )
    }
}

export default RichText
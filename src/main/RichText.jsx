import React, { Component} from 'react'
import './RichText.css'

import Button from '../components/Button'
import Input from '../components/Input'

const initialState = {
    text: '',
    style:'',
    styles : [],
    boldClick: true,
    italicClick: true,
    underlineClick: true
}
class RichText extends Component{

    
    constructor(props){
        super(props)
        this.buttonActionItalic = this.buttonActionItalic.bind(this)
        this.buttonActionUnderline = this.buttonActionUnderline.bind(this)
        this.buttonActionBold = this.buttonActionBold.bind(this)
        this.styleAtt = this.styleAtt.bind(this)
        this.state = initialState
        this.handleChange = this.handleChange.bind(this)
    }

    styleAtt(){
        let styles = ''
        for(let i = 0; i < this.state.styles.length; i++){
            styles += ' '+this.state.styles[i]
        }
        this.state.style = styles
        console.log(this.state)

    }

    handleChange(e){
        this.setState({text: e.target.value})
        console.log(e.target.value)
    }

    buttonActionItalic(){
        if(this.state.italicClick){
            this.state.styles.push('italic')
            this.setState({styles: this.state.styles})
            this.setState({italicClick: false})
            this.styleAtt()
     
        }else{
            const elemento = this.state.styles.indexOf('italic')
            this.state.styles.splice(elemento)
            this.setState({italicClick: true})
            this.styleAtt()
        }
    }

    buttonActionBold(){
        if(this.state.boldClick){
            this.state.styles.push('bold')
            this.setState({styles: this.state.styles})
            this.setState({boldClick: false})
            this.styleAtt()
      
        }else{
            const elemento = this.state.styles.indexOf('bold')
            this.state.styles.splice(elemento)
            this.setState({boldClick: true})
            this.styleAtt()
        }


    }

    buttonActionUnderline(){
        if(this.state.underlineClick){
            this.setState({underlineClick: false})
            this.state.styles.push('underline')
            this.setState({styles: this.state.styles})
            this.styleAtt()
  
        }else{
            const elemento = this.state.styles.indexOf('underline')
            this.state.styles.splice(elemento)
            this.setState({underlineClick: true})
            this.styleAtt()
        }

 
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
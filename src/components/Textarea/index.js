import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css'

const Textarea = ()=>{
    const [isClick, setIsClick] = useState(true)

    const [labelText, setLabelText] = useState('')
    const [secondInputValue, setSecondInputValue] = useState('')

    const [formData, setFormData] = useState([])

    const beforeFormSubmit = (event)=>{
        event.preventDefault()
        setIsClick(!isClick)
    }
    const onSubmitAfterForm = (event)=>{
        setSecondInputValue("")
        event.preventDefault()
        const newData = {
            id: uuidv4(),
            label:labelText,
            type:"text",
            value:secondInputValue
        }
        setFormData(prevValues=>[...prevValues,newData])
        console.log(formData)
        return isClick?"":<p>Please Check Console for formdata</p>
    }
    const beforeClick = ()=>{
        return(
            <form onSubmit={beforeFormSubmit}>
            <label htmlFor='textareaInput'>Enter Label Type</label><br/>
            <input type="text" id="textareaInput" value={labelText} className="textInput" required onChange={(event)=>setLabelText(event.target.value)}/><br/>
            <button type='submit' className='button'>Add To Form</button>
        </form>
        )
    }
    const afterClick = ()=>{
        return(
            
            <form onSubmit={onSubmitAfterForm}>
                <label htmlFor='afterText'>{labelText}</label><br/>
                <textarea type="text" id="afterText" rows="4" cols="50" required value={secondInputValue} onChange={(event)=>setSecondInputValue(event.target.value)}></textarea><br/>
                <button type="submit" className='button'>Button</button>
                
            </form>
            
        )
    }
    return(
        <div>
            {isClick?beforeClick():afterClick()}
        </div>
        
        
    )
}
export default Textarea
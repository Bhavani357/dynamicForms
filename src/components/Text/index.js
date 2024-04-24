import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Form from '../Form';
import './index.css';

const Text = ()=>{
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
        setFormData([...formData,newData])
        
        console.log(formData)
        // return <p>Please Check Console for formdata</p>
    }
    const beforeClick = ()=>{
        return(
            <form onSubmit={beforeFormSubmit}>
            <label htmlFor='textInput'>Enter Label Type</label><br/>
            <input type="text" id="textInput" value={labelText} className="textInput" required onChange={(event)=>setLabelText(event.target.value)}/><br/>
            <button type='submit' className='button'>Add To Form</button>
        </form>
        )
    }

    const secondInputValueChange = (event)=>{
        setSecondInputValue(event.target.value)
        
    }
    
    const afterClick = ()=>{
        return(
            <>
                <form onSubmit={onSubmitAfterForm}>
                    <label htmlFor='afterText'>{labelText}</label><br/>
                    <input type="text" id="afterText"  className="textInput" required value={secondInputValue} onChange={secondInputValueChange}/><br/>
                    <button type="submit" className='button'>Button</button>
                </form>
                
            </>
        )
    }
    return(
        <div>
            {isClick?beforeClick():afterClick()}
            
        </div>
        
        
    )
}
export default Text
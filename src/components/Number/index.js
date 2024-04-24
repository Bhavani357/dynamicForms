import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css';

const Number = ()=>{
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
            type:"number",
            value:secondInputValue
        }
        setFormData([...formData,newData])
        console.log(formData)
        // return <p>Please Check Console for formdata</p>
    }
    const beforeClick = ()=>{
        return(
            <form onSubmit={beforeFormSubmit}>
            <label htmlFor='NumberInput'>Enter Label Type</label><br/>
            <input type="text" id="NumberInput"  required className="textInput"  value={labelText} onChange={(event)=>setLabelText(event.target.value)}/><br/>
            <button type='submit'  className='button'>Add To Form</button>
        </form>
        )
    }
    const afterClick = ()=>{
        return(
            <form onSubmit={onSubmitAfterForm}>
                <label htmlFor='afterText'>{labelText}</label><br/>
                <input type="number" id="afterText" className="textInput" required value={secondInputValue} onChange={(event)=>setSecondInputValue(event.target.value)}/><br/>
                <button type="submit"  className='button'>Button</button>
            </form>
        )
    }
    return(
        <div>
            {isClick?beforeClick():afterClick()}
        </div>
        
        
    )
}
export default Number
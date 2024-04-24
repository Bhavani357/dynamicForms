import './index.css'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Radio = ()=>{
    const [isClick, setIsClick] = useState(true)

    const [labelText, setLabelText] = useState('')

    const [formData, setFormData] = useState([])
    const [li,setLi] = useState("")
    const [ulItems,setUlItems] = useState([])
    const [selectedOption, setSelectedOption] = useState('')

    const beforeFormSubmit = (event)=>{
        event.preventDefault()
        setIsClick(!isClick)
        
        
    }
    const onSubmitAfterForm = (event)=>{
        event.preventDefault()
        const newData = {
            id: uuidv4(),
            label:labelText,
            type:"text",
            value:selectedOption
        }
        setFormData([...formData,newData])
        console.log(formData)
    }

    const addItemsToUl = ()=>{
        setUlItems([...ulItems, li])
        setLi("")
    }

    const beforeClick = ()=>{
        return(
            <form onSubmit={beforeFormSubmit}>
            <label htmlFor='textInput'>Enter Label Type</label><br/>
            <input type="text" id="textInput" className='inputElement' required value={labelText} onChange={(event)=>setLabelText(event.target.value)}/><br/>
            <label htmlFor='checkbox'>Add Choices</label><br/>
            <input type="text" id="checkbox" required className='inputElement' value={li} onChange={(event)=>setLi(event.target.value)}/>
            <button onClick={addItemsToUl} type='button' className='button'>Add Choices</button><br/>
            {ulItems.map(each=>(<li>{each}</li>))}
            <button type='submit' className='button'>Add To Form</button>
        </form>
        )
    }

    const handleCheckBoxChange=(each)=>{
        setSelectedOption(each)
        
    }
    const afterClick = ()=>{
        return(
            <form onSubmit={onSubmitAfterForm}>
                <label htmlFor='afterText'>{labelText}</label><br/>
                {ulItems.map((each,index)=>(
                    <>
                        <label key={index} htmlFor={index} className={selectedOption === each ? 'selected' : ''}>
                            <input type='radio' value={index} checked={selectedOption===each} id={index} onChange={()=>handleCheckBoxChange(each)}/>
                            {each}
                            
                        </label><br/>
                        </>
                    ))}
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
export default Radio
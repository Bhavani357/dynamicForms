import './index.css'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Checkbox = ()=>{
    const [isClick, setIsClick] = useState(true)

    const [labelText, setLabelText] = useState('')

    const [formData, setFormData] = useState([])
    const [li,setLi] = useState("")
    const [ulItems,setUlItems] = useState([])
    const [checkedItems, setCheckedItems] = useState({})
    const [selectedCheckBox, setSelectedCheckbox] = useState([])

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
            value:selectedCheckBox
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
        const updatedCheckedItems = {...checkedItems,[each]: !checkedItems[each]}
        setCheckedItems(updatedCheckedItems)
        console.log(checkedItems)
        ulItems.filter(each=>{
            if(checkedItems[each]===true){
                setSelectedCheckbox([...selectedCheckBox,each])
            }
    })
    }
    const afterClick = ()=>{
        return(
            <form onSubmit={onSubmitAfterForm}>
                <label htmlFor='afterText'>{labelText}</label><br/>
                {ulItems.map((each,index)=>(
                    <>
                        <label>
                            <input type='checkbox' required value={each} key={index} checked={checkedItems[each] || false} onChange={()=>handleCheckBoxChange(each)}/>
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
export default Checkbox
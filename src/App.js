import './App.css';
import Text from './components/Text';
import Number from './components/Number'
import Textarea from './components/Textarea'
import Dropdown from './components/Dropdown'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Form from './components/Form'
import {useState} from 'react'

function App() {
  const [compnent,setComponent] = useState([])

  const onDefineComponents = (event)=>{
    if(event.target.value === 'text'){
      setComponent(<Text/>)
    }else if(event.target.value === 'number'){
      setComponent(<Number/>)
    }else if(event.target.value === 'textarea'){
      setComponent(<Textarea/>)
    }else if(event.target.value === 'dropdown'){
      setComponent(<Dropdown/>)
    }else if(event.target.value === 'checkbox'){
      setComponent(<Checkbox/>)
    }else if(event.target.value === 'radio'){
      setComponent(<Radio/>)
    }

  }
  return (
    <div className='topContainer'>
      <div className='firstContainer'>
      <h1 className='heading'>React Dynamic Forms</h1>
      <form>
        <select className='selectElement' onChange={onDefineComponents}>
          <option value="select from below">select from below</option>
          <option value="text">text</option>
          <option value="number">number</option>
          <option value="textarea">textarea</option>
          <option value="dropdown">dropdown</option>
          <option value="checkbox">checkbox</option>
          <option value="radio">radio</option>
          
        </select>
      </form>
      {compnent}
      </div>
      <div className='bottomdiv'>
        <Form/>
      </div>
    </div>
  );
}

export default App;

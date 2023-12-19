import './AddTask.css'
import { useState } from 'react'

function AddItem({onAdd}) {
    const [text, setText] = useState('')
    const [time, setTime] = useState('') 
    const [reminder, setReminder] = useState(false)  
    
    function addNew(e) {
        e.preventDefault()
        if (!text){
            alert('please add your task description')
            return
        }
        onAdd({text, time, reminder})
        setText('')
        setTime('')
        setReminder(false)
    }
    
    return(
        <form action="" className="formSec" onSubmit={addNew}>
            <div className="formDiv">
                <label htmlFor=""> Task Description</label>
                <input type="text" placeholder="enter desc here" 
                  value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className="formDiv">
                <label htmlFor="">Time</label>
                <input type="text" placeholder="add Date and Time"
                  value={time} onChange={(e)=> setTime(e.target.value)}/>
            </div>
            <div className="formDiv">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder}
                  onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>
            <div className="formDiv">
                <input type="submit" value='Save Task' className='btn' />
            </div>
            {/* <input type="submit" value='yeah yeah' /> */}
        </form>
    )
}

export default AddItem
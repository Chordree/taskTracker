import './item.css'
import {FaTimes} from 'react-icons/fa'

function Item(params) {

const {id, text, time, reminder, xClicked, doubleClick} = params
    return(
        <div className={reminder? 'itG' : "itemDiv"} onDoubleClick={()=>doubleClick(id)} >
            <h3 >{text} <FaTimes style= {{color:'red', cursor:'pointer', alignSelf:'end'}} onClick={()=> xClicked(id)}/> 
            </h3>
            <p>{params.time}{'<>'}{time}</p>
            <p>{params.reminder}</p>
        </div>
    
    )
}
// space the FaTimes icon and the text 
// check and see what happens if changed to flex end

export default Item 
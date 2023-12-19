import { useLocation } from 'react-router'
import './Header.css'



function Heading (props) {
    const page = useLocation()
    const {toggleShow, show} = props
    return(
        <header className="head_sec">
            <h1> Task Tracker </h1>
            {page.pathname === '/' && (
                <button className='btn' onClick={toggleShow}> {show ? 'Collapse Form' : 'Add Task'} </button>
            )}
        </header>
    )
    
    
}

// another way to add default props 
// Heading.defaultProps = {
//     title : 'songs',
//     gen : 'genz'
// }

export default Heading
import './tasks.css'
import Item from './item'


// // const tasks = [
//     {
//         id:1,
//         text:'first appointment',
//         time:'3:00pm',
//         reminder:true
//     },
//     {
//         id:2,
//         text:'this is just a random task',
//         time:'5th march 2:15pm',
//         reminder:true
//     },
//     {
//         id:3,
//         text:'food shopping',
//         time:'5:00pm',
//         reminder:false
//     }
// ]


function Tasks(props) {

   const {tasks, onDelete, doubleTap} = props
    

    return(

        <div>
          {tasks.map((task)=> (<Item key={task.id} text = {task.text} id = {task.id}
           time= {task.time} reminder={task.reminder} xClicked={onDelete} doubleClick={doubleTap}/>)
          )}  
         
        </div>
        // notice the key is used where the mapping occurs not passed on as props
        // <div>
        //   {tasks.map((task)=> (<h3 key={task.id}> {task.text}</h3>)
        //   )}  
         
        // </div>
    )
}

export default Tasks
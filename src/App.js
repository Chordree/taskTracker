import React from 'react';
import './App.css';
import Heading from './components/Header';
import Tasks from './components/tasks';
import { useState } from 'react'
import AddItem from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  

  const [taskss, setTasks] = useState( [
    {
      id:1,
      text:'first appointment',
      time:'3:00pm',
      reminder:true
    },
    {
      id:2,
      text:'this is just a random task',
      time:'5th march, 2:15pm',
      reminder:false
    },
    {
      id:6,
      text:'click on the AddTask button at the Top right',
      time:'now',
      reminder:false
    },
    {
      id:4,
      text:'double click me to toggle reminder',
      time:'now',
      reminder:true
    },
    {
      id:3,
      text:'food shopping',
      time:'5:00pm',
      reminder:true
    },
    {
      id:5,
      text:'click on the red part to cancle this task,',
      time:'now',
      reminder:false
    }
])

const [showAddForm, setShow] = useState(false)
// delete task
  function deleteTask(id){
    console.log('delete', id)
    setTasks(taskss.filter((elem)=> elem.id !== id))
  }

  
  // set remider
  function highlight(id){
    console.log('remind', id);
    setTasks(taskss.map((elm)=> elm.id === id
    ? {...elm, reminder: !elm.reminder} : elm))
  }
  //add task
  function addTask(descp) {
    console.log(descp);
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...descp}
    setTasks([...taskss, newTask])
  }


  return (
    <Router>
      <div className="App">
        
        <Heading toggleShow ={()=> setShow(!showAddForm)} show= {showAddForm}/>
        
        <Routes>
        
          <Route index  element= {<>
              {/* short form for tenary without an else */}
              {showAddForm && <AddItem onAdd = {addTask}/>}
              {taskss.length > 0 ? (<Tasks tasks = {taskss} onDelete={deleteTask} doubleTap={highlight}/>) : 
              (<h2> Welldone on completing your tasks!!<br/> No task left for now </h2> )}
              
          </>}
          />
          <Route path='/about' Component={About}/>
        </Routes>
        

        <Footer/>
        
        
      </div>
    </Router>    
  );
}
// state pased down,
// actions get  passed up ..
// check how to reneder if else in jsx without use of tenary

export default App;

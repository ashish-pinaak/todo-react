import './App.css';
import { useState, useEffect } from 'react';
import Todo from './myComponents/todo/Todo';
import db from './firebase';
import firebase from 'firebase';


//State : short term memory for a component which clears after page refresh

function App() {

  //const [todos,setMyTodo]=useState(['Bath in morning','Office Meeting']);
  const [todos,setMyTodo]=useState([]);
  const [input,setMyInput]=useState('');

// will run whenever App component reloads 
  useEffect(()=>{

    //runs whenever database changes and gives snapshot of it in realtime.
    db.collection('todos').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
      //snapshot.docs : array of all documents
      //doc.data() data of that document
      // todo field of that document
      // snapshot.docs.map(doc=>doc.data().todo).forEach((firebasetodo)=>{
      //   todos.push(firebasetodo);
      // });
      setMyTodo(snapshot.docs.map(doc=>{return {id:doc.id,todo:doc.data().todo}}));
    });

  },[]);

  const todoButtonHandler=(event)=>{
    if(input){
    // todos.push(input);
    // setMyTodo(todos);
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMyInput('');
    }
  };

  const keyUpHandler=(event)=>{
    if (event.keyCode === 13) {
      event.preventDefault();
      todoButtonHandler(event);
    }
  };

  return (
    <div className="App">
        <h1>Hello Ashish Sahrawat {2+2}🔥 </h1>
        <input type="text" value={input} onChange={event=>{setMyInput(event.target.value)}} onKeyUp={keyUpHandler}/>
        <button disabled={!input} onClick={todoButtonHandler}>Add TODO</button>
        <div>{input}</div>
          {todos.map(mytodo=>(
            <Todo key={mytodo.id} currentTodo={mytodo}/>
          ))}
    </div>
  );
}

export default App;

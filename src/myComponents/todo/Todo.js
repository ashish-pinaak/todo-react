import './Todo.css';
import db from '../../firebase';

//Props : just pass properties from parent component to the child component

function Todo(props) {

  const deleteHandler=(event)=>{
    db.collection('todos').doc(props.currentTodo.id).delete();
  }

  return (
    <div className="todo">
      <div className="todoText">
          {props.currentTodo.todo}
      </div >
      <div className="deleteButton">
          <button  onClick={deleteHandler}>Delete</button>
      </div>
      </div>
  );
}

export default Todo;

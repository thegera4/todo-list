import '../stylesheets/Todo.css';
import { MdOutlineDeleteForever } from 'react-icons/md'


function Todo( { id, text, completed, completeTodo, deleteTodo } ){
  return(
    <div className={ completed ? "container-todo completed" : "container-todo" }>
      <div 
      className="text-todo"
      onClick={() => completeTodo(id)} >
        { text }
      </div>
      <div 
      className="container-icons-todo"
      onClick={() => deleteTodo(id)}>
        <MdOutlineDeleteForever className="icon-todo"/>
      </div>
    </div>
  );
}

export default Todo;
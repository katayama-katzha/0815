import React,{useState} from "react";
import "./styles.css";

export const App = () =>{
  const [todoText,setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState([
    'あああああ',
    'いいいいい'
  ]);
  const [completeTodos,setCompleteTodos] = useState([
    'うううう'
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText ==="")return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return(
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area areas">
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo)=>{
            return(
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}

        </ul>
      </div>
      <div className="complete-area areas">
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo)=>{
            return(
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  ) 
};
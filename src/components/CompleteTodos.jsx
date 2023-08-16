import React from 'react';

export const CompleteTodos = (props) =>{
    const{todos,onClickBack} = props;
    return(
        <div className="complete-area areas">
            <p>完了のTODO</p>
            <ul>
            {todos.map((todo,index)=>{
                return(
                <li key={todo} className="list-row">
                    <p>{todo}</p>
                    <button onClick={()=>onClickBack(index)}>戻す</button>
                </li>
                );
            })}
            </ul>
        </div>
    );
};
import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(td => <TodoItem item={td} key={td._id} delete={props.delCallback} />)}
        </div>
    );
}

export default TodoList;

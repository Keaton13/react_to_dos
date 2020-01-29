import React from 'react';
import ListItem from './list_item'

const toDos = [
    {
        id: '01',
        title: 'Wash Car'
    },
    {
        id: '02',
        title: 'Finish Homework'
    },
    {
        id: '03',
        title: 'Go to Work'
    },
    {
        id: '04',
        title: 'Work on car'
    }
]

function ToDoList(props) {
    const toDoElements = toDos.map((item) => {
        return <ListItem key={item.id} title={item.title}/>
    })

    return(
        <ol>
            {toDoElements}
        </ol>
    )
}

export default ToDoList;
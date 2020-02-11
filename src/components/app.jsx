import React from 'react';
import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';

const toDos = [
  {
    id: '01',
    title: 'Wash car'
  },
  {
    id: '02',
    title: 'Go to store'
  },
  {
    id: '03',
    title: 'Clean bathroom'
  },
  {
    id: '04',
    title: 'Learn React'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.addToDo = this.addToDo.bind(this)
  }

  componentDidMount(){
    this.getToDos();
  }

  addToDo(item){
    const { list } = this.state;

    const _id = list.length + 1;

    this.setState({
      list: [
        ...list,
        {
          _id: _id,
          title: item.title
        }
      ]
    });
  }

  getToDos() {
    this.setState({
      list: toDos
    })
  }
  render() {
    const { list } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <ToDoList list={list} />
        <AddToDoForm add={this.addToDo}/>
      </div>
    );
  }
}

export default App;

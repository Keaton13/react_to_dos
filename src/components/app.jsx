import React from 'react';
import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';


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

  // async addToDo(item){
  //   const resp = await fetch('http://api.reactprototypes.com/todos?key=keaton13', {
  //     method: 'POST',
  //     body: JSON.stringify(item)
  //   })

  //   this.getToDos();
  // }

  addToDo(item){
    fetch('http://api.reactprototypes.com/todos?key=keaton13', {
      method: 'POST',
      body: JSON.stringify(item)
    }).then(resp => {
      return resp.json();
    }).then( data => {
      this.getToDos();
    }).catch( error => {
      console.log('Caught Error:', error)
    })
  }

  // async getToDos() {
  //   const resp = await fetch('http://api.reactprototypes.com/todos?key=keaton13');
  //   const data = await resp.json();

  //   this.setState({
  //     list: data.todos
  //   })
  // }

  getToDos() {
    fetch('http://api.reactprototypes.com/todos?key=keaton13').then( resp => {
      return resp.json();
    }).then(data =>{
      console.log('Data:', data.todos)
      this.setState({
        list: data.todos
      })
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

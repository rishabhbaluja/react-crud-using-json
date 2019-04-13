import React, { Component } from "react";
import axios from "axios";

export class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.delete = this.delete.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    // this.onSubmit= this.onSubmit.bind(this);
  }
  baseUrl = "http://localhost:3000/todos";

  getTodos = () => {
    axios.get(this.baseUrl).then(response => {
      this.setState({ todos: response.data });
    });
  };

  delete(id) {
    alert("Todo id: " + id);
    axios.delete(this.baseUrl + "/" + id).then(res => {
      this.getTodos();
    });
  }

  //   UpdateTodo(id){
  //     this.setState({id:id})
  //      console.log(this.state.id)
  //    }

  //    onSubmit=(e)=>{
  //     e.preventDefault()
  //     const todos = {
  //     name: this.state.name,
  //       status: this.state.status

  //     };
  //     axios.put(this.baseUrl+'/edit/'+ this.state.id, todos).then(response=>{
  //       this.getTodos()

  //     })
  //   }

  onChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }
  onChangeStatus(event) {
    this.setState({
      status: event.target.value
    });
  }

  componentDidMount() {
    this.getTodos();
  }

  routeChange = id => {
    let path = `/update`;
    console.log(id);
    localStorage.setItem("id", id);
    this.props.history.push(path);
  };
  routeChangeAdd() {
    let path = `/create`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary  btn-md text-center"
          onClick={e => this.routeChangeAdd()}
        >
          Add
        </button>
        <table className="table table-striped table-responsive table-hover">
          <thead>
            <tr>
              <td> Name</td>
              <td>Status:</td>
            </tr>
          </thead>

          {this.state.todos.map((obj, i) => (
            <tbody>
              <tr key={i}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>
                  {obj.status}
                  <button
                    className="btn btn-danger"
                    onClick={e => this.delete(obj.id)}
                  >
                    X
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={e => this.routeChange(obj.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Get;

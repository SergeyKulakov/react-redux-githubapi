import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAxios } from '../actions/actionAxios'
import { bindActionCreators } from "redux";

class AxiosList extends Component {
  render() {
    return (

      <>
        {this.props.todos.length !== 0 ? (
            <div id="posts" className="well">
              {this.props.todos.map(todo => (
                <article key={todo.id}>
                    <header className="avatar-container">
                        <img className="avatar" src={todo.avatar_url} alt={todo.avatar_url}/>
                        <h3>LogIn: <br/><br/> {todo.login}</h3>
                    </header>
                    <div className="controls">
                        <button className="btn btn-danger btn-mini btn-delete" onClick={() =>{ this.props.deleteAxios(todo.id) } }>удалить</button>
                    </div>
                </article>
              ))}
            </div>
        ) : (
                <article className="well well-alert">
                  <header>
                      <h3>No users from github in list!</h3>
                  </header>
                  <section>
                      <p>Please, add new users</p>
                  </section>
                </article>
        )}{" "}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteAxios
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AxiosList);

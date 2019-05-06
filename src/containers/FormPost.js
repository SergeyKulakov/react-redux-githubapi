import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/actionPosts'
import { bindActionCreators } from 'redux'

class FormPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
            tags: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    handleChange(key) {
        return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
        }.bind(this);   
    }

    addPost(event) {
        event.preventDefault();
        this.props.addPost(this.state.title, this.state.body, this.state.tags.split(",")); 
        this.setState({ title: '', body: '', tags: '' });
    }

    render(){
        return (
            <form id="post-add" className="col-lg-4" onSubmit={this.addPost}>
                <div className="form-group">
                    <input type="text" className="form-control" name="title" placeholder="запись" value={this.state.title} onChange={this.handleChange('title')} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="body" placeholder="запись" value={this.state.body} onChange={this.handleChange('body')} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="tags" placeholder="тег, еще тег" value={this.state.tags} onChange={this.handleChange('tags')} required/>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPost
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(FormPost)
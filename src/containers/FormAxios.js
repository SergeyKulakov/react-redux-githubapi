import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addAxios } from '../actions/actionAxios'
import { bindActionCreators } from 'redux'
import axios from 'axios';

class FormAxios extends Component {
    constructor(props){
        super(props)
        this.state = {
            search_login: '',
            id: 0,
            login: '',
            avatar_url: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.addAxios = this.addAxios.bind(this);
    }

    handleChange(e){
        this.setState({
            search_login: e.target.value
        })
    }

    addAxios(event) {
        event.preventDefault();
        var id = 0;
        var login, avatar_url = '';
        axios.get('https://api.github.com/users/' + this.state.search_login)
        .then(response => this.props.addAxios(id = response.data.id, login = response.data.login, avatar_url = response.data.avatar_url))
        this.setState({ search_login: '' });
    }

    render(){
        return (
            <form className="upper-form" onSubmit={this.addAxios}>
                <div className="form-group">
                    <input type="text" className="form-control" name="title" placeholder=" логин" value={this.state.search_login} onChange={this.handleChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addAxios
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(FormAxios)
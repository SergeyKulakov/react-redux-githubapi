import React, { Component } from 'react';
import FormPost from './containers/FormPost'
import PostList from './containers/PostList'
import FormAxios from './containers/FormAxios'
import AxiosList from './containers/AxiosList'
import './App.css';
import './css/posts.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="container">
            <header id="header">
                <div className="page-header">
                    <h1>Тестовое задание</h1>
                </div>
                <h2>Задача:</h2>
                <ol>
                    <li>Используя коллекцию <code>json/posts.json</code> заполнить базовыми значениями <code>localStorage</code> пользователя, вывести записи в <code>#posts</code>, взяв за основу разметку <code>#posts article</code>.</li>
                    <li>Возможность удаления записи из <code>localStorage</code>.</li>
                    <li>Форма добавления записи, валидация данных.</li>
                </ol>
                <p className="alert alert-info">Ограничений по использованию библиотек, кроссбраузерности &mdash; нет.</p>
            </header>

            <section className="container">
                <PostList/>
                <FormPost/>
            </section>

            <section className="container">
                <h1>Axios example</h1>
                <p>For example: mojombo, defunkt, ivey</p>
                <FormAxios/>
                <AxiosList/>
            </section>
        </div>

      </div>
    );
  }
}

export default App;

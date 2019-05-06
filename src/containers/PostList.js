import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/actionPosts";
import { bindActionCreators } from "redux";

class PostList extends Component {
  render() {
    return (
      <>
        {this.props.posts.length !== 0 ? (
            <div id="posts" className="well">
              {this.props.posts.map(post => (
                <article key={post.id}>
                    <header>
                        <h3>{post.title}</h3>
                    </header>
                    <section>
                        <p>{post.body}</p>
                    </section>
                    <div className="tags">
                        {post.tags.map((todo) =>
                          <button className="btn btn-xs btn-default" key={todo}>{todo}</button>
                        )}
                    </div>
                    <div className="controls">
                        <button className="btn btn-danger btn-mini btn-delete" onClick={() => this.props.deletePost(post.id)}>удалить</button>
                    </div>
                </article>

              ))}
            </div>
        ) : (
                <article className="well well-alert">
                  <header>
                      <h3>No posts in list!</h3>
                  </header>
                  <section>
                      <p>Please, add new posts</p>
                  </section>
                </article>
        )}{" "}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deletePost
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

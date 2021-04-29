import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

const PostForm = ({ createPost }) => {
  const [inputTitle, setInputTitle] = React.useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputTitle.length) {
      const newPost = {
        title: inputTitle,
        id: Date.now().toString(),
      };
      createPost(newPost);
      setInputTitle('');
    }
  };

  const changeInputHandler = (event) => {
    setInputTitle(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          value={inputTitle}
          onChange={(e) => changeInputHandler(e)}
          type="text"
          className="form-control"
          id="title"
        />
      </div>
      <button
        disabled={!inputTitle.length}
        className="btn btn-success"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);

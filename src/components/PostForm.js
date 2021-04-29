import React from 'react';

const PostForm = () => {
  const [inputTitle, setInputTitle] = React.useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const newPost = {
      title: inputTitle,
      id: Date.now().toString(),
    };
    setInputTitle('');
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
      <button className="btn btn-success" type="submit">
        Create
      </button>
    </form>
  );
};

export default PostForm;

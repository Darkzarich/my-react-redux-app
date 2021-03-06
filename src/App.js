import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row mb-3">
        <div className="col">
          <h1>Post form</h1>
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Posts</h1>
          <Posts />
        </div>
        <div className="col">
          <h1>FetchedPosts</h1>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;

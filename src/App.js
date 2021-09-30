import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PostBody } from './components/post';
import { getPosts } from './postsSlice';
import Masonry from 'react-masonry-css'
import { getRandomIntInclusive } from './models/post';

function App() {
  const list = useSelector(state => state.posts.list)
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(getPosts());
  },[])

  const breakpointColumnsObj = {
    default: 5,
    1450: 3,
    850: 2,
    550: 1
  };

  return (
    <div className="App">
      <Masonry 
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
        
        {list.map( (element, index) => {
          return <PostBody index={index} height={getRandomIntInclusive(600, 1000)} />
        })}
        
      
      </Masonry>
    </div>
  );
}

export default App;

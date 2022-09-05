import React from 'react'
import { useEffect, useState } from 'react';

import Loader from '../Loader';
import axios from "axios";
import Post from "../Post";

function Home() {
    const [posts, setPosts]= useState(null);
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="App">
    
     <div className='container'>
      {posts ? (
          posts.map((post)=> {
            return <Post key={post.id} {...post} />; 
            
          })
      ) : (
      <Loader />
      )}

     </div>

    </div>
  )
}

export default Home
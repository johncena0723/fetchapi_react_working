import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from 'axios';

function Post() {
    const [posts, setPosts] = useState(null);
    const param = useParams();
    const [searchParam, setSearchParam] = useSearchParams();
    const navigate = useNavigate();

 useEffect(()=> {
    console.log(searchParam.get("filter"));
 }, [searchParam]);
 
    useEffect(() => {
       axios
        .get('https://jsonplaceholder.typicode.com/posts/' + param.id)
    .then((res) => {
      setPosts(res.data);
    });
    }, [param.id]);
  return (
    <div>
        {JSON.stringify(posts)}{""}
        <button onClick={() => setSearchParam({filter:"mobile"})}> Update query param</button>
        <button onClick={()=> navigate('/about')}>
            Redirect to about page
        </button>
        </div>);
  }

export default Post;
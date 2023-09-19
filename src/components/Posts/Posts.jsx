import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post"


const Posts = () => {
    const posts =useLoaderData()
  return (
    <div>
      <h2>Post: {posts.length}</h2>
      <div className="parent ">
       {
        posts.map(post=> <Post post={post}></Post>)
       }
      </div>
    </div>
  )
}

export default Posts

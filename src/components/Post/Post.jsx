import { Link } from "react-router-dom"


const Post = ({post}) => {
    const {id,title}=post
  return (
    <div className="user-container">
      <h3>Post of id: {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}><button className="btn">Post Details</button></Link>
    </div>
  )
}

export default Post

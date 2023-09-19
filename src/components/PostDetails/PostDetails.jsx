import { useLoaderData, useNavigate, useParams } from "react-router-dom"


const PostDetails = () => {
    const post=useLoaderData()
    const {postId}=useParams()
    const {id,title,body}=post
    const navigate=useNavigate()

    const handleGoHome=()=>{
        navigate(-1)
    }
  return (
    <div>
      <h3>Post details About: {id}</h3>
      <p>{title}</p>
      <p><small>{body}</small></p>
      <button className="btn" onClick={handleGoHome}>Go Back</button>
    </div>
  )
}

export default PostDetails

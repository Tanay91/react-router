
import { Link } from 'react-router-dom';
import './User.css';
const User = ({user}) => {
    const {id,name,phone,email}=user
  return (
    <div className='user-container'>
     
     <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}><button className='btn'>Show Details</button></Link>
     
    </div>
  )
}

export default User

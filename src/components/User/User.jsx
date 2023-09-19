
import './User.css';
const User = ({user}) => {
    const {id,name,phone,email}=user
  return (
    <div className='user-container'>
     
     <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
     
    </div>
  )
}

export default User

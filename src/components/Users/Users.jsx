import { useLoaderData } from "react-router-dom"
import User from "../User/User";
import './Users.css';


export const Users = () => {
    const users=useLoaderData();
  return (
    <div>
        <h2>Our Users:{users.length}</h2>
        <p>Vodro Users</p>
        <div className="parent">
            {
                users.map(user=><User user={user}></User>)
            }
        </div>
    </div>
  )
}

import { useLoaderData } from "react-router-dom"


const UserDetails = () => {
    const user=useLoaderData();
    const {name,website}=user
  return (
    <div>
      <h2>Details About user: {name}</h2>
      <h2>Visit Us: {website}</h2>
    </div>
  )
}

export default UserDetails

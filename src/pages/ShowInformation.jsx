import { useParams } from "react-router-dom"

const ShowInformation = () => {
  
    let { nombre } = useParams();

  return (
    <div>
        <h1>Show the information</h1>
        
        <span>The user id is: {nombre}</span>
    </div>
  )
}

export default ShowInformation
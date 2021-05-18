import { Link } from 'react-router-dom';
import '../App.css'

function RecipeCard(props)  {
    // console.log(props.id)
    return(
        <div id={'recipe-card-' + props.id}>
            <h2>{props.name}</h2>
            <Link to={`/recipes/archive/${props.id}`}><img src={props.image} className="recipe-image photo img-thumbnail img-fluid" alt="Image Not Found"/></Link>
            <br></br><br></br>
        </div>
    )
}

export default RecipeCard
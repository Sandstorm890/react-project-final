import { Link } from 'react-router-dom';
import '../App.css'

function RecipeCard(props)  {
    
    return(
        <div id={'recipe-card-' + props.id} class='card'>
            
            <Link to={`/recipes/archive/${props.id}`}><img src={props.image} className="recipe-image photo img-thumbnail img-fluid" alt="Not Found"/></Link>
            <h2>{props.name}</h2>
            <br></br><br></br>
        </div>
    )
}

export default RecipeCard
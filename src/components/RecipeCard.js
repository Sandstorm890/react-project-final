import { Link } from 'react-router-dom';


function RecipeCard(props)  {
    
    return(
        <div id={'recipe-card-' + props.id}>
            <h2>{props.recipe.name}</h2>
            <Link to={`/recipes/${props.id}`}><img src={props.recipe.img_url} className="recipe-image img-thumbnail img-fluid" alt="Image Not Found"/></Link>
            <br></br><br></br>
        </div>
    )
}

export default RecipeCard


function RecipeCard(props)  {

    return(
        <div id={'recipe-card-' + props.id}>
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.img_url} className="recipe-image img-thumbnail img-fluid" alt="None"/>
            <h4>Category: {props.recipe.category.name}</h4>
            <p>{props.recipe.description}</p>
        </div>
    )
}

export default RecipeCard
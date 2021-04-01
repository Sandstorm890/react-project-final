import React from 'react' 
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/recipeActions'

class RecipeShow extends React.Component {
    

    
    render() {
        return(
            <>
                <h2 className="float-left pl-4 ">{this.props.recipe.name}</h2><br></br><br></br>
                <img src={this.props.recipe.img_url} alt="Image not found" className="rounded float-left img-thumbnail img-fluid ml-4 mr-4"></img>
                <h3>Category: {this.props.recipe.category.name}</h3>
                <p className="font-weight-bold">Description</p>
                <p className="text-break">{this.props.recipe.description}</p>
                <a href='/recipes' className="text-danger" onClick={deleteRecipe(this.props)}>DELETE RECIPE</a>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        delete: (recipe) => dispatch({type: "DELETE_RECIPE", payload: recipe})
    }
}

export default connect(null, mapDispatchToProps)(RecipeShow)
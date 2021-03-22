import React from 'react' 
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/recipeActions'

class RecipeShow extends React.Component {
    
    render() {
        return(
            <>
                <RecipeCard recipe={this.props.recipe} id={this.props.id}/>
                <button onClick={deleteRecipe(this.props)}>DELETE RECIPE</button>
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
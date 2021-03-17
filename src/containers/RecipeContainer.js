import RecipeCard from '../components/RecipeCard'
import React from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipeActions'

class RecipeContainer extends React.Component {

    createRecipeCards() {
        const recipes = this.props.recipes["data"]
        if (recipes) {
            return recipes.map(recipe => <RecipeCard recipe={recipe.attributes} id={recipe.id} name={recipe.name} image={recipe.img_url} description={recipe.description}/>)
        }
    }

    componentDidMount() {
        this.props.getRecipes()
    }

    render() {
        return (
            <div id="recipe-container">
                {this.createRecipeCards()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const recipes = state.recipes

    return {
        recipes: recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
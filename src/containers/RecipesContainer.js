import RecipeCard from '../components/RecipeCard'
// import RecipeForm from '../components/RecipeForm'
import React from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipeActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import RecipeShow from '../components/RecipeShow'

class RecipesContainer extends React.Component {

    createRecipeCards() {
        console.log(this.props.recipes.data)
        const recipes = this.props.recipes.data
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
                <Router>
                    <Switch>
                        <Route exact path="/recipes">
                            {this.createRecipeCards()}
                        </Route>
                    </Switch>
                </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
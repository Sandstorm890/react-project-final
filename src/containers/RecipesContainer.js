import RecipeCard from '../components/RecipeCard'
import React from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipeActions'

class RecipesContainer extends React.Component {

    state = {
        search: ""
    }

    handleFormChange = (e) => {
        const value = e.target.value
        this.setState({
            search: value
        })
        // console.log(this.state.search.length)
        
    }

    createRecipeCards() {
        let recipes = this.props.recipes

        if (recipes && this.state.search.length !== 0) {
            recipes = recipes.filter(recipe => recipe.attributes.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
        } 
        
        if (recipes) {
            return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe.attributes} id={parseInt(recipe.id)} name={recipe.attributes.name} image={recipe.attributes.img_url} description={recipe.attributes.description}/>)
        }
    
    }

    componentDidMount() {
        this.props.getRecipes()
    }

    render() {
        return (
            <div id="recipe-container">
                <div className="font-weight-bold">Search:</div>
                <input type="text" value={this.state.search} onChange={this.handleFormChange}></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
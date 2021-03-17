import RecipeCard from '../components/RecipeCard'
import React from 'react'

class RecipeContainer extends React.Component {

    state = {
        recipes: [],
        search: ""
    }

    createRecipeCards() {
        
        const recipes = this.state.recipes
        return recipes.map(recipe => <RecipeCard recipe={recipe.attributes} id={recipe.id} name={recipe.name} image={recipe.img_url} description={recipe.description}/>)
    }

    componentDidMount() {
        const url = 'http://localhost:3000/recipes'
        // const url2 = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

        fetch(url)
        .then(r => r.json())
        .then(json => {
            
            this.setState({
                recipes: json["data"]
            })
        })
    }

    render() {
        return (
            <div id="recipe-container">
                {this.createRecipeCards()}
            </div>
        )
    }
}

export default RecipeContainer
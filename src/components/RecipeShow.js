import React from 'react' 
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard'

class RecipeShow extends React.Component {

    render() {
        return(
            <RecipeCard recipe={this.props.recipe.attributes} id={this.props.recipe.id} name={this.props.recipe.attributes.name} image={this.props.recipe.attributes.img_url} description={this.props.recipe.attributes.description}/>
        )
    }

}

const mapStateToProps = (state) => {
    const recipes = state.recipes
    
    return {
        recipes: recipes
    }
}

export default connect(null, mapStateToProps)(RecipeShow)
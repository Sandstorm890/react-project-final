import React from 'react' 
import RecipeCard from './RecipeCard'

class RecipeShow extends React.Component {

    render() {
        return(
            <RecipeCard recipe={this.props.recipe}/>
        )
    }
}


export default RecipeShow
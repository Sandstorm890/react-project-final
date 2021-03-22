import React from 'react' 
import {connect} from 'react-redux'
import {createRecipe} from '../actions/recipeActions'

class RecipeForm extends React.Component {
    state = {
        name: "",
        image: "",
        description: "",
        category: "",
        message: ""
    }

    handleFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const recipe = {...this.state}

        this.props.createRecipe(recipe)

        this.setState({
            name: "",
            img_url: "",
            description: "",
            category_id: "",
            message: `${recipe.name} was added`
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Recipe Name: </label>
                <input type="text" name="name" onChange={this.handleFormChange} value={this.state.name} /><br></br>
                <label>Image URL: </label>
                <input type="text" name="img_url" onChange={this.handleFormChange} value={this.state.img_url} /><br></br>
                <label>Description: </label>
                <input type="text" name="description" onChange={this.handleFormChange} value={this.state.description} /><br></br>
                <label>Category:</label>
                <input type="text" name="category_id" onChange={this.handleFormChange} value={this.state.category_id} /><br></br>
                <input type="submit" value="Add Recipe" />
                <h4>{this.state.message}</h4>
            </form>
        )
    }

}
export default connect(null, {createRecipe})(RecipeForm)
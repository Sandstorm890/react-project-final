import { Component } from 'react'
import './App.css';
import RecipeForm from './components/RecipeForm'
import RecipeShow from './components/RecipeShow'
import RecipesContainer from './containers/RecipesContainer'
import Header from './components/Header'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {getRecipes} from './actions/recipeActions'




class App extends Component {

  state = {
    search: ""
  }

  componentDidMount() {
    this.props.getRecipes()
  }
  
  render() {
    
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/recipes" >
              <RecipesContainer />
            </Route>
            <Route path="/recipes/new" >
              <RecipeForm />
            </Route>
            <Route path="/recipes/:id"  component={(routeInfo) => {
              // console.log(this.props.recipes.data.id)
              console.log(routeInfo)
              const id = parseInt(routeInfo.match.params.id)
              const recipe = !!this.props.recipes.data ? this.props.recipes.data.find(r => parseInt(r.id) === id) : null
              // console.log(recipe.id)
              return !!recipe ? <RecipeShow routeInfo={routeInfo} id={recipe.id} recipe={recipe.attributes}/> : <div>Recipe not found</div>
            }}/>
          </Switch>
        </Router>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
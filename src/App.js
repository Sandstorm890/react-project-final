import { Component } from 'react'
import './App.css';
import RecipeForm from './components/RecipeForm'
import RecipesContainer from './containers/RecipesContainer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



class App extends Component {

  state = {
    search: ""
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/recipes' >
              <RecipesContainer />
            </Route>
            <Route exact path='/recipes/new' >
              <RecipeForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
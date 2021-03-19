import { Component } from 'react'
import './App.css';
import RecipeForm from './components/RecipeForm'
import RecipeContainer from './containers/RecipeContainer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



class App extends Component {

  state = {
    search: ""
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <h1>Recipe Logbook</h1>
          <NavBar />
          <Switch>
            <Route exact path='/recipes' >
              <RecipeContainer />
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
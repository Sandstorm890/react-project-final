import { Component } from 'react'
import './App.css';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer'

class App extends Component {

  
  
  state = {
    search: ""
  }
  
  render() {
    return (
      <div className="App">
        <h1>Recipe Logbook</h1>
        
        <RecipeContainer />
      </div>
    );
  }
}

export default App;

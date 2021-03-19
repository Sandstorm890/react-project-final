import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


class NavBar extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <NavLink to='/recipes' >Home</NavLink>
                    <NavLink to='/recipes/new' >New Recipe</NavLink>
                </div>
            </Router>
        )

    }
    

}

export default NavBar
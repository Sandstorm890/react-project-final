import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <Router>
                <h1>Recipe Logbook</h1>
                <div>
                    <Link to='/recipes' >Home</Link>
                    <Link to='/recipes/new' >New Recipe</Link>
                </div>
            </Router>
        )
    }
}

export default Header
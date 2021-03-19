import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Recipe Logbook</h1>
                <div>
                    <Link to='/recipes' >Home</Link>
                    <div><Link to="/recipes/new">New Recipe</Link></div>
                </div>
            </div>
            
        )
    }
}

export default Header
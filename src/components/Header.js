import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <div >
                <h1>Recipe Logbook</h1>
                <div className="btn-group">
                    <div>
                        <button ><Link to='/recipes'>Home</Link></button>
                        <button ><Link to="/recipes/new">New Recipe</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
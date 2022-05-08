import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => {
    return (
        <nav>

                <header>
                  <Link to={"/contact"}>Contact</Link>
                  <Link to={"/about"}>About</Link>
                </header>
        
        </nav>
    );
}

export default Navigation;

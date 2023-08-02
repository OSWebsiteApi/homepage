import React, { useState } from 'react';

const leftNavigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(window.innerWidth >= 400);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="left_nav_container">
            {!isMenuOpen && (
                <div className="open-menu-block" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
            )}
            {isMenuOpen && (
                <div className="menu">
                    <ul>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        <li>Menu Item 3</li>
                    </ul>
                    <span className="close-icon" onClick={toggleMenu}>&times;</span>
                </div>
            )}
        </div>
    );
};

export default leftNavigation;

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='left-panel'>
                <div className="content-left-header">
                    <div className="logo">
                        <p>CMS+</p>
                    </div>
                </div>
                <div className="collection-details">
                    <div className="collection-types">
                        <p>COLLECTION TYPES</p>
                    </div>
                    <div className="collection-list">
                        <ul>
                            <li>Collection 1</li>
                            <li>Collection 2</li>
                            <li>Collection 3</li>
                            <li>Collection 4</li>
                            <li>Collection 5</li>
                        </ul>
                    </div>
                    <div className="content-builder">
                        <p>CONTENT TYPE BUILDER</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
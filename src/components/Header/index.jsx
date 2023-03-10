import React from 'react';
import './Header.css';
import proptypes from 'prop-types';
// import darkLogo from '../../assets/icon-search-dark@3x.png';


const Header = ({contents}) => {
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
                    {/* <div className="content-search">
                            <img src={darkLogo} alt="ef" />
                        </div> */}
                    
                    <div className="collection-list">
                        <ul>
                            {
                                contents.map((content,id) => {
                                    return <li key={id}>{content.name}</li>;
                                })
                            }
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

Header.propTypes = {
    contents: proptypes.array.isRequired
};
export default Header;


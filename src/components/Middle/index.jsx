import React from 'react';
import { useState } from 'react';
import './Middle.css';
import darkLogo from '../../assets/icon-search-dark@3x.png';
import Model from '../Model';

const Middle = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='middle-panel'>
            <div className="content-type-header">
                <div className="content-header">
                    <p>Content Types</p>
                </div>
            </div>

            <div className='content-table'>
                <div className="table-header">
                    <div className="no-of-content-type">
                        <p>7 Types</p>
                    </div>
                    <div className="content-search">
                        <img src={darkLogo} alt="ef" />
                    </div>
                </div>

                <div className='content-type-submit' onClick={() => setShowModal(true)}>
                    <p>+ New Type</p>
                </div>
                <Model onClose={() => setShowModal(false)} show={showModal} />

                <div className='content-name-holder'>
                    <div className='content-type-name'>
                        <p>Company_Profile</p>
                    </div>
                    <div className='content-type-entries'>
                        <p>13</p>
                    </div>
                </div>

                <div className='content-name-holder'>
                    <div className='content-type-name'>
                        <p>Company_Profile</p>
                    </div>
                    <div className='content-type-entries'>
                        <p>13</p>
                    </div>
                </div>

                <div className='content-name-holder'>
                    <div className='content-type-name'>
                        <p>Company_Profile</p>
                    </div>
                    <div className='content-type-entries'>
                        <p>13</p>
                    </div>
                </div>

                
            </div>
            <div className="content-submission">
                
            </div>
            

        </div>
    );
};

export default Middle;
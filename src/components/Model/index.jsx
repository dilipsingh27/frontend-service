import React from 'react';
import './Model.css';
import propTypes from 'prop-types';

const Model = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content type</span>
                </div>
                <div className='modal-body'>
                    <span>Name of the content type</span>
                    <input type="text" />
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button className='modal-create-button'>Create</button>
                </div>
            </div>
        </div>
    );
};

Model.propTypes = {
    onClose: propTypes.func.isRequired,
    show: propTypes.bool,
    children: propTypes.node
};

export default Model;

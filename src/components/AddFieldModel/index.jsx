import React,{useState} from 'react';
import './AddFieldModel.css';
import propTypes from 'prop-types';
import axios from 'axios';

const AddFieldModel = (props) => {
    const [field, setField] = useState('');
    console.log('inside axios func',props.contentId);
    if (!props.show) {
        return null;
    }

    const handleChange = (e) => {
        setField(e.target.value);
    };
    console.log(field);
    const handleField = async() => {
        const res = await axios({
            method:'POST',
            url:`http://localhost:5000/api/addField/${props.contentId}`,
            data:{newfield:field}
        });
        window.location.reload();
        console.log(res);
        props.onClose();
    };



    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content type</span>
                </div>
                <div className='modal-body'>
                    <span>Name of the content type</span>
                    <input type="text" onChange={handleChange} value={field}/>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button className='modal-create-button' onClick={handleField}>Create</button>
                </div>
            </div>
        </div>
    );
};

AddFieldModel.propTypes = {
    onClose: propTypes.func.isRequired,
    show: propTypes.bool,
    children: propTypes.node,
    contentId: propTypes.string
};

export default AddFieldModel;

import React,{useState} from 'react';
import './Model.css';
import propTypes from 'prop-types';
import axios from 'axios';

const Model = (props) => {
    const [content, setContent] = useState('');

    if (!props.show) {
        return null;
    }


    const handleChange = (e) => {
        setContent(e.target.value);
    };


    const handleSubmit = async() => {
        if(props.contentId){
            const res = await axios({
                method:'PATCH',
                url:`http://localhost:5000/api/updateContent/${props.contentId}`,
                data:{newContent:content}
            });
            console.log(res);
            window.location.reload();
        }
        else{
            const res = await axios({
                method:'POST',
                url:'http://localhost:5000/api/contents',
                data:{name:content}
            });
            console.log(res);
            window.location.reload();
        }
    };


    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content type</span>
                </div>
                <div className='modal-body'>
                    <span>Name of the content type</span>
                    <input type="text" onChange={handleChange} value={content}/>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button className='modal-create-button' onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    );
};

Model.propTypes = {
    onClose: propTypes.func.isRequired,
    show: propTypes.bool,
    contentId: propTypes.string
};

export default Model;

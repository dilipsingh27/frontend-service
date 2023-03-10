import React from 'react';
import './AddField.css';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import proptypes from 'prop-types';
import Model from '../Model';

const AddField = ({contentById,setShowModal,showModal}) => {
    // console.log(contentById);

    


    return (
        <div className='add-all-field'>
            <div className="add-field-header">
                <div className="field-header">
                    
                </div>
            </div>

            <div className="content-type-heading">
                <div className="content-title">
                    <p>{contentById.name}</p>
                </div>
                <div className="content-type-edit" onClick={() => setShowModal(true)} >
                    <img src={editIcon} alt="" />
                </div>
                <Model onClose={() => setShowModal(false)} show={showModal} contentId = {contentById.id}/>
                
            </div>
            <div className='no-of-field'>
                {/* <p>{Object.keys(contentById.fields).length}</p> */}
            </div>

            

            <div className="total-fields">
                <div className="add-field">
                    <p>Add another field</p>
                </div>
                {
                    contentById.fields && Object.keys(contentById.fields).map((field,id) => {
                        return (
                            <div className="show-field" key={id}>
                                <p>AB</p>
                                <div className="show-field-detail">
                                    <div className="field-name">
                                        <p>{field}</p>
                                    </div>
                                    <div className='field-type'>
                                        <p>Text</p>
                                    </div>
                                    <div className="field-icon" >
                                        <div className="field-edit" onClick={() => setShowModal(true)} >
                                            <img src={editIcon} alt=""/>
                                        </div>
                                        <Model onClose={() => setShowModal(false)} show={showModal} />
                                        <div className="field-delete">
                                            <img src={editIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

AddField.propTypes = {
    contentById: proptypes.object.isRequired,
    click: proptypes.bool.isRequired,
    setShowModal: proptypes.func.isRequired,
    showModal: proptypes.bool.isRequired,
    setContentById: proptypes.func.isRequired,
};

export default AddField;
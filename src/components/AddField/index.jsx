import React from 'react';
import './AddField.css';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';

const AddField = () => {
    return (
        <div className='add-all-field'>
            <div className="add-field-header">
                <div className="field-header">
                    
                </div>
            </div>

            <div className="content-type-heading">
                <div className="content-title">
                    <p>Company_Profile</p>
                </div>
                <div className="content-type-edit">
                    <img src={editIcon} alt="" />
                </div>
                
            </div>
            <div className='no-of-field'>
                <p>13 fields</p>
            </div>

            

            <div className="total-fields">
                <div className="add-field">
                    <p>Add another field</p>
                </div>

                <div className="show-field">
                    <p>AB</p>
                    <div className="show-field-detail">
                        <div className="field-name">
                            <p>Name</p>
                        </div>
                        <div className='field-type'>
                            <p>Text</p>
                        </div>
                        <div className="field-icon">
                            <div className="field-edit">
                                <img src={editIcon} alt="" />
                            </div>
                            <div className="field-delete">
                                <img src={editIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="show-field">
                    <p>AB</p>
                    <div className="show-field-detail">
                        <div className="field-name">
                            <p>Name</p>
                        </div>
                        <div className='field-type'>
                            <p>Text</p>
                        </div>
                        <div className="field-icon">
                            <div className="field-edit">
                                <img src={editIcon} alt="" />
                            </div>
                            <div className="field-delete">
                                <img src={editIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="show-field">
                    <p>AB</p>
                    <div className="show-field-detail">
                        <div className="field-name">
                            <p>Name</p>
                        </div>
                        <div className='field-type'>
                            <p>Text</p>
                        </div>
                        <div className="field-icon">
                            <div className="field-edit">
                                <img src={editIcon} alt="" />
                            </div>
                            <div className="field-delete">
                                <img src={editIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        




        </div>
    );
};

export default AddField;
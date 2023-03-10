import React from 'react';
import './AddField.css';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import proptypes from 'prop-types';
import Model from '../Model';
import AddFieldModel from '../AddFieldModel';
import axios from 'axios';
import userPencil from '../../assets/userPencil.png';
import deleteIcon from '../../assets/deleteIcon.png';

const AddField = ({contentById,showModal,setShowModal}) => {
    const [showFieldModal, setShowFieldModal] = React.useState(false);
    console.log('ggggggg',contentById);

    const deleteField =async (field,id) => {
        // console.log(field,id);
        const res = await axios({
            method:'DELETE',
            url:`http://localhost:5000/api/deleteField/${id}`,
            data:{fieldKey:field}
        });
        window.location.reload();
        console.log(res);
    };

    return (
        <div className='add-all-field'>
            <div className="add-field-header">
                <div className="field-header">
                    
                </div>
            </div>

            <div className="content-type-heading">
                <div className="content-title">
                    <p>{contentById.name ? contentById.name : 'Company_Profile'}</p>
                </div>
                <div className="content-type-edit" onClick={() => setShowModal(true)} >
                    <img src={userPencil} alt="" />
                </div>
                <Model onClose={() => setShowModal(false)} show={showModal} contentId = {contentById.id}/>
                
            </div>

            <div className='no-of-field'>
                {/* <p>{Object.keys(contentById.fields).length}</p> */}
            </div>

            

            <div className="total-fields">
                <div className="add-field" onClick={() => setShowFieldModal(true)}>
                    <p>Add another field</p>
                </div>
                <AddFieldModel onClose={() => setShowFieldModal(false)} show={showFieldModal} contentId = {contentById.id}/>

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
                                        <div className="field-edit" onClick={() => setShowModal(true)}>
                                            <img src={editIcon} alt=""/>
                                        </div> 
                                        <Model onClose={() => setShowModal(false)} show={showModal} contentId = {contentById.id} oldKey = {field}/>
                                        <div className="field-delete" onClick={()=> deleteField(field,contentById.id)}>
                                            <img src={deleteIcon} alt="" />
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
    showModal: proptypes.bool.isRequired,
    setShowModal: proptypes.func.isRequired

};

export default AddField;
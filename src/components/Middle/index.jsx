import React from 'react';
// import { useState } from 'react';
import './Middle.css';
import darkLogo from '../../assets/icon-search-dark@3x.png';
import Model from '../Model';
import proptypes from 'prop-types';
import axios from 'axios';
import deleteIcon from '../../assets/deleteIcon.png';

const Middle = ({contents,setContentById,setShowModal,showModal}) => {
    console.log('contents',contents);
    // const [showModal, setShowModal] = useState(false);

    const getContentInfo = (id) => {
        axios
            .get(`http://localhost:5000/api/contents/${id}`)
            .then((res) => {
                console.log(res);
                setContentById(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteContent =async (id) => {
        // console.log(field,id);
        const res = await axios({
            method:'DELETE',
            url:`http://localhost:5000/api/deleteContent/${id}`,
        });
        window.location.reload();
        console.log(res);
    };

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
                        <p>{contents.length} Types</p>
                    </div>
                    <div className="content-search">
                        <img src={darkLogo} alt="ef" />
                    </div>
                </div>

                <div className='content-type-submit' onClick={() => setShowModal(true)}>
                    <p>+ New Type</p>
                </div>
                <Model onClose={() => setShowModal(false)} show={showModal} />

                {
                    contents && contents.map((content,id) => (
                        <div className='content-name-holder' key={id} onClick={()=>getContentInfo(content.id)}>
                            <div className='content-type-name'>
                                {/* {console.log('dfds',content.name)} */}
                                <p className='ssss'>{content.name}</p>
                            </div>
                            <div className='content-type-entries'>
                                <p>{Object.keys(content.fields).length}</p>
                                <div className="delete-content" onClick={()=> deleteContent(content.id)}>
                                    <img src={deleteIcon} alt="" />
                                </div>
                            </div>
                   
                        </div>
                    ))
                }

            </div>
            <div className="content-submission">
                
            </div>
            

        </div>
    );
};

Middle.propTypes = {
    contents: proptypes.array.isRequired,
    setContentById: proptypes.func.isRequired,
    setShowModal: proptypes.func.isRequired,
    showModal: proptypes.bool.isRequired,
};

export default Middle;
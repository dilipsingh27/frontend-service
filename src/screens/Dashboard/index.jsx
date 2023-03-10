import React, { useEffect,useState } from 'react';
import './Dashboard.css';
import Header from '../../components/Header';
import Middle from '../../components/Middle';
import AddField from '../../components/AddField';
import axios from 'axios';


const Dashboard = () => {
    const [contents, setContents] = useState([]);
    const [contentById,setContentById] = useState({});
    const [showModal, setShowModal] = React.useState(false);

    // const tokenString = localStorage.getItem('token');
    // let token = '';
    // if (tokenString) {
    //     token = JSON.stringify(tokenString);
    // }
    // console.log('@##@@@@',token);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/contents')
            .then((res) => {
                console.log(res);
                setContents(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='dashboard'>
            <div className='header'>
                <Header contents={contents}/>
            </div>
            <div className='middle'>
                <Middle contents={contents} setContentById={setContentById} setShowModal={setShowModal} showModal={showModal}/>
            </div>
            <div className='right'>
                <AddField contentById={contentById} setContentById={setContentById} setShowModal={setShowModal} showModal={showModal}/>
            </div>
        </div>
    );
};

export default Dashboard;
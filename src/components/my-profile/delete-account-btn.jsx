import { useEffect, useState, useContext } from 'react';
import './myprofile.css'
import { Link } from 'react-router-dom'
import Context from '../navbar/Profile Menu/context/UserContext';
import axios from 'axios'
import useUser from '../navbar/Profile Menu/context/useUser';

const DeleteAccountBtn = () => {
    const {email, setEmail} = useContext(Context);
    const { logout } = useUser();
    // const [values, setValues] = useState({
    //     "_id": "",
    //     "username":"",
    //     "firstname":"",
    //     "lastname":"",
    //     "email":"",    
    //     "password": "",
    //     "wishlist": [],
    //     "__v": "0",
    // });
    
    // const onSubmit = async () => {
        //     const response = await fetch(`http://localhost:5000/deleteAccount/prueba@gmail.com`);
        //     const data = await response.json();
        //     setValues(data);
        //     };
        
        const onSubmit = async () => {
            setEmail(email);
            await axios.delete(`http://localhost:5000/deleteAccount/${email}`)
            .then(response => {
                logout()
                // setValues(null);
            })
        }
        
    // useEffect(() => {
    //     onSubmit();
    // }, []);

    return (
        <>
            <Link to="/Home">
                <button className='delete-account-btn' type='submit' value="Delete" onClick={onSubmit}>Eliminar cuenta 🗑 </button>
            </Link>
        </>
    )
}

export default DeleteAccountBtn
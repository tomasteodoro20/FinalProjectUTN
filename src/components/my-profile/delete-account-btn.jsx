import { useEffect, useState, useContext } from 'react';
import './myprofile.css'
import { Link } from 'react-router-dom'
import Context from '../navbar/Profile Menu/context/UserContext';
import axios from 'axios'
import useUser from '../navbar/Profile Menu/context/useUser';

const DeleteAccountBtn = () => {
    const {email, setEmail} = useContext(Context);
    const { logout } = useUser();
        
        const onSubmit = async () => {
            setEmail(email)
            await axios.delete(`http://localhost:5000/deleteAccount/${email}`)
            .then(() => {
                alert("La cuenta ha sido eliminada con éxito")
                logout()
            })
        }
    return (
        <>
            <Link to="/Home">
                <button className='delete-account-btn' type='submit' onClick={onSubmit}>Eliminar cuenta 🗑 </button>
            </Link>
        </>
    )
}

export default DeleteAccountBtn
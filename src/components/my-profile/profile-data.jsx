import { useContext, useState, useEffect } from 'react'
import Context from '../navbar/Profile Menu/context/UserContext';
import './myprofile.css'

function ProfileData () {

    const {email, setEmail} = useContext(Context);
    const [values, setValues] = useState({
        "username":"",
        "firstname":"",
        "lastname":"",
        "email":"",    
    });

    const fetchDetails = async () => {
        setEmail(email);
        const response = await fetch(`http://localhost:5000/userProfile/${email}`);
        const data = await response.json();
        setValues(data[0]);
    };
        
    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <>
        <div className='text-style'>
            <p>Usuario: {values.username}.</p>
            <p>Nombre: {values.firstname}.</p> 
            <p>Apellido: {values.lastname}.</p>
            <p>E-mail: {values.email}.</p>
        </div>
        </>
    )
}

export default ProfileData;
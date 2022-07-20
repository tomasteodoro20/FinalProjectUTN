import './myprofile.css'
import { Link } from 'react-router-dom'

function DeleteAccountBtn () {
    return (
        <>
            <Link to="/Home" className='delete-account-btn' type="button">
                Eliminar cuenta 🗑
            </Link>
        </>
    )
}

export default DeleteAccountBtn
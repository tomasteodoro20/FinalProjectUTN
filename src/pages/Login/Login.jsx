import NavBar from "../../components/navbar/NavBar";
import Divider from "../../components/divider/Divider";
import LoginForm from "../../components/login/login-form";
import Footer from "../../components/footer/Footer";
import { Container } from "react-bootstrap";
import "./login.css"

function Login () {
    return (
        <>
        <NavBar/>
        <Container>
        <h2 className='title'>Iniciar sesión</h2>
        <Divider/>
        <LoginForm/>
        </Container>
        <Footer/>
        </>
    )
}

export default Login;
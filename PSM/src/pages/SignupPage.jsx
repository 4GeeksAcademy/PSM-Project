import LogoSVG  from '../../public/assets/logo-no-background.svg';
import { LoginInputs } from '../components/LoginInputs';
import { Link } from 'react-router-dom';

export function SignupPage(){

    return(
        <div className="h-screen w-full bg-cover bg-center" style={{backgroundImage: "url('/assets/parque.jpg')"}} >
        <div className="bg-gray-800 opacity-95 text-white w-2/5 p-4 h-screen flex flex-col items-center">
            <img src={LogoSVG} alt="logo"  className="w-32"/>
            <h1 className="te text-3xl mt-5 mb-4">Welcome to ScriptPark!!</h1>
            <p className="mb-5">Create an Account</p>
            <LoginInputs/>
            <button className="w-2/5 bg-cyan-700 h-12 mt-5 mb-5 rounded-full">Login</button>

            <p>Already have an account? <Link to='/'> Log In </Link> </p>

        </div>

    </div>
    )
}
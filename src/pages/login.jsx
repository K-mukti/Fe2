import { useEffect } from "react";
import FormLogin from '../components/form/form-login.jsx';
import Nav from '../components/nav/index.jsx';
const Login = () => {
        
        useEffect(() => {
                document.title = "Login - videobelajar"; //untuk judul tab browser 
        },[]);

        return (

                <div className='container mx-auto'>
                        <div className='flex flex-wrap'>
                                <Nav/> {/* Untuk navbar */}
                                <div className='flex flex-col w-full hp:px-5 hp:py-7 hp:gap-6 lg:px-[120px] lg:py-20 lg:gap-9  '>
                                        <FormLogin/> {/* Untuk form-login */}
                                </div>
                        </div>
                        
                </div>

        )   
}

export default Login;
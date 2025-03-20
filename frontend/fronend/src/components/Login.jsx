import '../App.css';
import CustomTextField from './forms/TextField'; // ✅ Fixed Naming Conflict
import Box from '@mui/material/Box';
import PassField from './forms/PaasField';
import SubmitButton from './forms/SubmitButton';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {handleSubmit , control} = useForm();
    
    const submission = (data) =>{
        AxiosInstance.post(`login/` , {
            email : data.email,
            password : data.password 
        }).then((response)=>{
            console.log(response)
            localStorage.setItem('Token' , response.data.token)
            navigate(`/home`)
        }).catch((error)=>{
            console.log("Error During Login",error)
        })
    }

    return (

        <div className={'myBackground'}>
            <form onSubmit={handleSubmit(submission)}>
            <Box className={'whiteBox'}>
                <Box className={'itemBox'}>
                    User Login
                </Box>

                <Box className={'itemBox'}>
                    <CustomTextField name={'email'} control={control} label={'Email'} />
                </Box>

                <Box className={'itemBox'}>
                    <PassField name={'password'} control={control} password={'Password'} />
                </Box>

                <Box className={'itemBox'}>
                    <SubmitButton type={'submit'} label={'Login'} />
                </Box>

                <Box className={'itemBox'}>
                    <Link to={'/register'}>Don't have an account? Login </Link>
                </Box>
            </Box>
            </form> 
        </div>
    );
};

export default Login;

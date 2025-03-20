import '../App.css';
import CustomTextField from './forms/TextField'; // ✅ Fixed Naming Conflict
import Box from '@mui/material/Box';
import PassField from './forms/PaasField';
import SubmitButton from './forms/SubmitButton';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const {handleSubmit , control} = useForm();

    const submission = (data) =>{
        AxiosInstance.post(`register/` , {
            email : data.email,
            password : data.password 
        }).then(()=>{
            navigate(`/`)
        })
    }

    return (
        <div className={'myBackground'}>

            <form onSubmit={handleSubmit(submission)}>
            <Box className={'whiteBox'}>
                <Box className={'itemBox'}>
                    User Registration
                </Box>

                <Box className={'itemBox'}>
                    <CustomTextField name={'email'} control={control} label={'Email'} />
                </Box>

                <Box className={'itemBox'}>
                    <PassField name={'password'} control={control} password={'Password'} />
                </Box>

                <Box className={'itemBox'}>
                    <PassField name={'password2'} control={control} password={'Confirm password'} />
                </Box>

                <Box className={'itemBox'}>
                    <SubmitButton type={'submit'} label={'Register'} />
                </Box>

                <Box className={'itemBox'}>
                    <Link to={'/'}>Already have an account? Login </Link>
                </Box>
            </Box>
            </form>
        </div>
    );
};

export default Register;

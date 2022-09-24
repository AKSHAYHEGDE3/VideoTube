import React,{useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../../styles/auth.scss'
import { useDispatch, useSelector } from 'react-redux';
import { signInModalState, signUpModalState } from '../../store/reducers/auth';
import { RootState } from '../../store';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface signIn{
    name:string,
    email:string,
    password:string
}

const SignIn = () => {

    const dispatch = useDispatch()
    const signInModal = useSelector((state:any)=>state.auth.signInModal)
    const [data,setData] = useState<signIn>({
        name:'',
        email:'',
        password:''
    })

    const handleClose = () => {
        dispatch(signUpModalState(false))
    }
    return (
        <Modal
            open={signInModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="formContainer">
                    <form >
                        <h2>Sign In</h2>
                        <input  type="email" placeholder="Email"
                        value={data.email}
                        onChange={e => setData(pre=>({...pre,email:e.target.value}))}
                        />
                        <input type="password" placeholder="Password"
                       value={data.email}
                       onChange={e => setData(pre=>({...pre,email:e.target.value}))}
                        />
                        <button type="submit" className="loginButton">Sign In</button>
                        <span>
                            New to VideoTube? &nbsp; &nbsp;<b><span onClick={()=>{
                                dispatch(signUpModalState(true));
                                dispatch(signInModalState(false));
                            }}>Sign up.</span></b>
                        </span>
                    </form>
                    {/* <div className="text-danger mt-4">
                        {error}
                    </div> */}
                </div>
            </Box>
        </Modal>
    )
}

export default SignIn
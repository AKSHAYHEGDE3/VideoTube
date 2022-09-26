import React,{useState,useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../../styles/auth.scss'
import { useDispatch, useSelector } from 'react-redux';
import { signInModalState, signUpModalState } from '../../store/reducers/auth';
import { RootState } from '../../store';
import { registerWithEmailAndPassword, auth } from '../../firebase';

interface signUp {
    name:string,
    email: string,
    password: string
}

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

const SignUp = () => {
    const dispatch = useDispatch()
    const signUpModal = useSelector((state: any) => state.auth.signUpModal)
    const [data, setData] = useState<signUp>({
        name:'',
        email: '',
        password: ''
    })
    const user = useSelector((state: any) => state.auth.user)

    const handleClose = () => {
        dispatch(signUpModalState(false))
    }

    const signUp = async (e:any) => {
        e.preventDefault();
        await registerWithEmailAndPassword(data.name,data.email, data.password)
    }

    useEffect(() => {
        if (user) {
            handleClose()
        }
    }, [user])

    return (
        <Modal
            open={signUpModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="formContainer">
                    <form onSubmit={(e)=>signUp(e)} >
                        <h2>Sign Up</h2>
                        <input type="text" placeholder="name"
                        value={data.name}
                        onChange={e => setData(pre => ({ ...pre, name: e.target.value }))}
                        required
                        />
                        <input type="email" placeholder="Email"
                        value={data.email}
                        onChange={e => setData(pre => ({ ...pre, email: e.target.value }))}
                        required
                        />
                        <input type="password" placeholder="Password"
                        value={data.password}
                        onChange={e => setData(pre => ({ ...pre, password: e.target.value }))}
                        required
                        />
                        <button type="submit" className="loginButton">Sign Up</button>
                        <span>
                            Already Registered? &nbsp; &nbsp;<b><span onClick={() => {
                                dispatch(signUpModalState(false));
                                dispatch(signInModalState(true))
                            }}>Sign In.</span></b>
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



export default SignUp
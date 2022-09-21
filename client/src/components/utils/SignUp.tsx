import React from 'react'
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

const SignUp = () => {
    const dispatch = useDispatch()
    const signUpModal = useSelector((state: any) => state.auth.signUpModal)

    const handleClose = () => {
        dispatch(signUpModalState(false))
    }
    return (
        <Modal
            open={signUpModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="formContainer">
                    <form >
                        <h2>Sign Up</h2>
                        <input type="text" placeholder="name"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        />
                        <input type="email" placeholder="Email"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password"
                        // value={password}
                        // onChange={e => setPassword(e.target.value)}
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
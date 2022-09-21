import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import '../styles/auth.scss'
import { useDispatch, useSelector } from 'react-redux';
import { signInModalState } from '../store/reducers/auth';
import { RootState } from '../store';

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

const SignIn = () => {

    const dispatch = useDispatch()
    const signInModal = useSelector((state:RootState)=>state.auth.signInModal)

    const handleClose = () => {
        dispatch(signInModalState(false))
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
                        <input type="email" placeholder="Email"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password"
                        // value={password}
                        // onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit" className="loginButton">Sign In</button>
                        <span>
                            New to VideoTube? &nbsp; &nbsp;<b><Link to="/signup">Sign up.</Link></b>
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
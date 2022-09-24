import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "../../styles/Upload.scss"

import { useDispatch, useSelector } from 'react-redux';
import { changeUploadState } from '../../store/reducers/upload';
const UploadComp = () => {

    const dispatch  = useDispatch()
    const uploadState=useSelector(((state:any)=>state.upload.buttonState))

    const changeState=()=>{
        dispatch(changeUploadState(false))
    }

  return (


    <Modal
  open={uploadState}
  onClose={changeState}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
<div className='uploadContainer'>
      <input type="text" placeholder='Title'/>
      <textarea  placeholder='Description'/>
      <input type="file" placeholder='Upload Video'/>
      <input type="file" placeholder='Upload Image'/>
      <input type="text" placeholder='Tags'/>
      <button>Upload Video</button>
    </div>
</Modal>




   
  )
}

export default UploadComp

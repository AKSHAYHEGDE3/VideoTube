import React, { useState,useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "../../styles/Upload.scss"
import app,{db} from "../../firebase/index"
import { getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL} from "firebase/storage"

  import { collection,addDoc} from "firebase/firestore"; 

import { useDispatch, useSelector } from 'react-redux';
import { changeUploadState } from '../../store/reducers/upload';
// import { UploadFile } from '@mui/icons-material';


interface VideoData{
   
    title:string
    desc:string
    videoUrl:string
    imgUrl:string
    tags:Array<string>
}

const UploadComp = () => {

  
    const dispatch  = useDispatch()
    const uploadState=useSelector(((state:any)=>state.upload.buttonState))
    const [videoData,setVideoData] = useState<VideoData>({

        title:"",desc:"",tags:[],imgUrl:"",videoUrl:""
    })
    const changeState=()=>{
        dispatch(changeUploadState(false))
    }

    const handleTags=(e:any)=>{
      const tags = e.target.value;
      setVideoData(prev=>({...prev,tags:tags.split(",")}))
    }

   

    const handleSubmit=(e:any)=>{
      e.preventDefault()
     
     const res= addDoc(collection(db,"videos"),videoData).then(res=>{

      setImgPer(0)
      setVideo(0)
      setVideoData({

        title:"",desc:"",tags:[],imgUrl:"",videoUrl:""
    });
    changeState()

     }).catch(err=>console.log("error",err))
     
    }

    const [img,setImg]  = useState<any>(undefined)
    const [video,setVideo]  = useState<any>(undefined)
    const [imgPer,setImgPer]=useState<number>(0);
    const [videoPer,setVideoPer] = useState<number>(0);

    const uploadFile=(file:any,uploadType:string)=>{
      const storage = getStorage(app);
      const filename = new Date().getTime() + file.name;
      const storageRef = ref(storage,filename);
      const uploadTask = uploadBytesResumable(storageRef,file)


      uploadTask.on("state_changed",(snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploadType=="imgUrl" ? setImgPer(Math.round(progress)):setVideoPer(Math.round(progress))
        switch(snapshot.state){
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;

        }
      },(error)=>{},()=>{getDownloadURL(uploadTask.snapshot.ref).then(ref=>setVideoData(prev=>({...prev,[uploadType]:ref})))})

    }
  


    useEffect(()=>{video && uploadFile(video,"videoUrl")},[video])

    useEffect(()=>{img && uploadFile(img,"imgUrl")},[img])

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        
        border: '2px solid #000',
     
      
    };



    

  return (


    <Modal
    
  open={uploadState}
  onClose={changeState}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
    <Box sx={style}>

    <div className='uploadContainer' >
        <h3>Upload a Video</h3>
      <input type="text" placeholder='Title' value={videoData.title} onChange={(e)=>setVideoData((prev:VideoData)=>({...prev,title:e.target.value}))}/>
      <textarea  placeholder='Description' value={videoData.desc} onChange={(e)=>setVideoData((prev:VideoData)=>({...prev,desc:e.target.value}))}
      />
      
      <label style={{color:"white"}}>Video:</label>
      {videoPer>0?(<p style={{color:"white"}}>{videoPer<100 ? videoPer+" %" :"Upload Complete"}</p>):(
        <input type="file" placeholder='Upload Video' accept="video/*" onChange={(e)=>setVideo(e?.target?.files ? e.target.files[0]:undefined)}/>
      )}

      
      <label style={{color:"white"}}>ThumbNail:</label>
      {imgPer > 0 ? (<p style={{color:"white"}}>{imgPer<100 ? imgPer+" %" :"Upload Complete"}</p>):( <input type="file" placeholder='Upload Image' accept='image/*' onChange={(e)=>setImg(e?.target?.files ? e.target.files[0] : undefined)}/>)}
     
      <input type="text" placeholder='Tags'  onChange={(e)=>handleTags(e)}/>
      <button onClick={e=>handleSubmit(e)}>Upload Video</button>
    </div>
    </Box>

</Modal>




   
  )
}

export default UploadComp

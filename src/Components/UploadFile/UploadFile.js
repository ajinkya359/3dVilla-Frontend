import React, { useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../../backend';
import './UploadFile.css'
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from "@material-ui/icons/CloudUpload";


function UploadFile() {
  const [file, setfile] = useState(null)
  const [uploading,setUploading]=useState(false)
  const handleInputFileChange=(e)=>{
  
    // console.log(e.target.files.length);
    setfile(e.target.files[0]);
    // console.log(file)
  }
  const handleClick=()=>{
    if(file==null) return;
    var formData = new FormData();
    formData.append("image", file);
    setUploading(true)
    axios.post(backendUrl+'upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res=>{
      alert("Upload successfull")
      console.log(res.data)
    }).catch(error=>{
      console.log(error);
    });
    setUploading(false);

  }



  return (
    <div className="upload_body">
      <div className="input_field">
        <div className="file">
          <UploadFileIcon />
          <input type="file" onChange={handleInputFileChange} />
        </div>
        <Button variant="contained" onClick={handleClick} disabled={uploading}>
          {uploading ? <CircularProgress /> : <div>Upload</div>}
        </Button>
      </div>
    </div>
  );
}

export default UploadFile
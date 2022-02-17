import { useState } from 'react';
import './App.css';
import ListModel from './Components/ListModel/ListModel';
import NavBar from './Components/NavBar/NavBar';
// import ResponsiveAppBar from './Components/NavBar/NavBar';
import SingleModel from './Components/SingleModel/SingleModel';
import UploadFile from './Components/UploadFile/UploadFile';
import UploadFile2 from './Components/UploadFile/UploadFile2';

function App() {
  const [upload,setUpload]=useState(false)

  return (
    <div className="App">
      <NavBar setUpload={setUpload}/>
      {upload?<UploadFile2/>:<ListModel/>}
    </div>
  );
}

export default App;

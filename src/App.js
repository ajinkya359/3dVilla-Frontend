import { useState } from 'react';
import './App.css';
import ListModel from './Components/ListModel/ListModel';
import NavBar from './Components/NavBar/NavBar';
import Preview from './Components/Preview/Preview';
// import ResponsiveAppBar from './Components/NavBar/NavBar';
import SingleModel from './Components/SingleModel/SingleModel';
import UploadFile from './Components/UploadFile/UploadFile';
import UploadFile2 from './Components/UploadFile/UploadFile2';

function App() {
  const [upload,setUpload]=useState(false)
  // const [modal setMo]
  const [model, setModel] = useState("1645069939512--name--P8.glb");
  const [file,setFile]=useState(null)
  
  return (
    <div className="App">
      <NavBar setUpload={setUpload} className="navbar" />
      <div className="app_body">
        {upload ? (
          <div style={{ width: "40vw", padding: "30vh 0 0 2vw" }}>
            <UploadFile2 setFileFromParent={setFile} />
          </div>
        ) : (
          <ListModel setModel={setModel} />
        )}
        {upload ? (
            <Preview file={file} />
        ) : (
          <SingleModel model_id={model} />
        )}
      </div>
    </div>
  );
}

export default App;

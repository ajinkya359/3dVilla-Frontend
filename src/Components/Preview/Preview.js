import axios from 'axios'
import React, { useEffect, useState, Suspense } from "react";
import { backendUrl } from '../../backend'
import { Canvas } from "@react-three/fiber"; //renderer for 3 js
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './SingleModel.css'
import CircularProgress from '@mui/material/CircularProgress';



function Preview({file}) {
    const [modelData, setmodelData] = useState(null)
    // console.log("single_modle",model_id)

    const Model = () => {
      //   console.log(number);
      
      const bruh = useLoader(GLTFLoader, modelData);
      return <primitive object={bruh.scene} />;
      
     
    };
    // const getModel=async()=>{
    //       await axios
    //       .get(backendUrl + "singleModel/" + model_id, {
    //         responseType: "blob",
    //         timeout: 30000,
    //       })
    //       .then(d=>{
    //           setmodelData(URL.createObjectURL(d.data))
    //           // console.log(d.data)
    //       })
    //       .catch((error) => console.log(error));
    // }
    useEffect(()=>{
    //  if(file!==null) 
      console.log(file)
      setmodelData(file);
    },[file])
  return (
    <div className='singleModel'>
      <h3>Preview</h3>
      {modelData === null ? (
        // <div className='error'>Hello</div>
       <a>No file selected</a>
      ) : (
        <Canvas camera={{ fov: 35, zoom: 5, near: 1, far: 1000 }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            {/* <Iphone/> */}
            <Model />
            {/* <primitive object={gltf.scene}/> */}
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default Preview
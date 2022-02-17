import axios from 'axios'
import React, { useEffect, useState, Suspense } from "react";
import { backendUrl } from '../../backend'
import { Canvas } from "@react-three/fiber"; //renderer for 3 js
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './SingleModel.css'
import CircularProgress from '@mui/material/CircularProgress';



function SingleModel({model_id}) {
    const [modelData, setmodelData] = useState(null)
    // console.log("single_modle",model_id)
    let modelName=null
    if(model_id!==null&&model_id.includes('--name--')===true){
      const index=model_id.search('name--')
      // console.log(index)
      // console.log(model_id.substring(index + 6, model_id.length - 4));
      modelName = model_id.substring(index + 6, model_id.length - 4);
    }
    const Model = () => {
      //   console.log(number);
      
      const bruh = useLoader(GLTFLoader, modelData);
      return <primitive object={bruh.scene} />;
      
     
    };
    const getModel=async()=>{
      if(model_id===null) return 
          await axios
          .get(backendUrl + "singleModel/" + model_id, {
            responseType: "blob",
            timeout: 30000,
          })
          .then(d=>{
            
              setmodelData(URL.createObjectURL(d.data))
              console.log("blob",d.data)
          })
          .catch((error) => console.log(error));
    }
    useEffect(()=>{
      setmodelData(null)
        getModel()
        // console.log(modelData)
    },[model_id])
  return (
    <div className='singleModel'>
      <h3>{modelName===null?"No model Selected":modelName}</h3>
      {modelData === null ? (
      modelName!==null?<CircularProgress/>:""
      ) : (
        <Canvas camera={{ fov: 35, zoom : 5, near: 1, far: 1000 }}>
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

export default SingleModel
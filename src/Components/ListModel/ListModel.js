import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../../backend'
// import SingleModel from '../SingleModel/SingleModel'
import './ListModel.css'
import CircularProgress from '@mui/material/CircularProgress';


function ListModel({setModel}) {
  const [loading,setLoading]=useState(true)
    const [models,setModels]=useState([])
    const getModelsList=async ()=>{
        await axios.get(backendUrl+'number_of_models')
        .then(res=>{
            // console.log(res.data)
            setModels(res.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getModelsList()
    },[]
    )
    const model_name=(model_id)=>{
      let modelName = "unknown";
      if (model_id.includes("--name--") === true) {
        const index = model_id.search("name--");
        // console.log(index);
        // console.log(model_id.substring(index + 6, model_id.length - 4));
        modelName = model_id.substring(index + 6, model_id.length - 4);
      }
      return modelName
    }
    const handleNameClick=(e)=>{
      const temp = e.target.getAttribute("data-key");
      // console.log(temp)
      setModel(temp)
    }
  return (
    <div className="list_of_models">
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {models.length !== 0 ? (
            models.map((m) => (
              <h3 key={m} data-key={m} onClick={handleNameClick}>
                {model_name(m)}
              </h3>
            ))
          ) : (
            <h1>No models</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default ListModel
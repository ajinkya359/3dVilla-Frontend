import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../../backend'
import SingleModel from '../SingleModel/SingleModel'
import './ListModel.css'

function ListModel() {
    const [models,setModels]=useState([])
    const getModelsList=async ()=>{
        await axios.get(backendUrl+'number_of_models')
        .then(res=>{
            console.log(res.data)
            setModels(res.data)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getModelsList()
    },[]
    )
  return (
    <div className='list_of_models'>{models.map(model_id=><SingleModel model_id={model_id} key={model_id}/>)}</div>
  )
}

export default ListModel